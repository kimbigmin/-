import TextField from '@mui/material/TextField';
import { useState } from 'react';
import hp from '../../core/Hp';
import InputAdornment from '@mui/material/InputAdornment';

type PatternType = {
    onlyNum: RegExp;
    onlyNumDot: RegExp;
    onlyKor: RegExp;
};

const patternObj: PatternType = {
    onlyNum: /[^0-9]/gi,
    onlyNumDot: /[^0-9.]/gi,
    onlyKor: /[^ㄱ-ㅎㅏ-ㅣ가-힣]/gi,
};

const restrictMessages = {
    onlyNum: '숫자만 입력 가능합니다.',
    onlyNumDot: '숫자 형식으로 입력해주세요.',
    onlyKor: '한글만 입력 가능합니다.',
};

function CustomTextField({
    label,
    pattern,
    fixedValue,
    number,
}: {
    label: string;
    pattern?: RegExp | keyof PatternType;
    fixedValue?: number | string;
    number: number;
}) {
    const [isErrorMsg, setIsErrorMsg] = useState(false);
    const [inputValue, setInputValue] = useState('');

    // 인풋 핸들러
    const handleInput = (e: any) => {
        let val = e.target.value;
        let msg = '';

        // 패턴 항목 체크
        if (typeof pattern === 'string') {
            msg = restrictMessages[pattern];
            pattern = patternObj[pattern];
        }

        // 패턴 체크
        if (pattern) val = val.replace(pattern, '');

        // 입력 불가항목
        if (e.target.value !== val) {
            setIsErrorMsg(true);
            setTimeout(() => {
                setIsErrorMsg(false);
            }, 1000);
            e.target.value = val;

            // 지금은 로그로만 제한 메시지 주고있는데 UI 얘기해봐야할듯.. 칸이 너무 작음
            hp.warnLog(msg);
        }
        setInputValue(val);
    };
    // 라벨 핸들러
    const handleLabel = () => {
        return isErrorMsg && typeof pattern === 'string'
            ? restrictMessages[pattern]
            : label;
    };

    return (
        <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            // sx={{ backgroundColor: '#e538388d', borderRadius: '5px' }}
            color={isErrorMsg ? 'error' : 'success'} // 에러 발생시 색깔 변경
            label={handleLabel()} // 라벨 변경해서 에러 표시
            InputLabelProps={{ style: { fontSize: 12, textAlign: 'center' } }}
            margin="dense"
            onChange={handleInput}
            value={fixedValue ? fixedValue : inputValue}
        />
    );
}

const gradeColor = {
    first: '#178bff7a',
    second: '#40d43b7b',
    third: '#e7ee2d81',
    fourth: '#ee942d90',
    fifth: '#e538388d',
};

export default CustomTextField;

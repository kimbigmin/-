import TextField from '@mui/material/TextField';
import { useState } from 'react';
import hp from '../../core/Hp';
import Standard from '../../core/Standard';

type PatternType = {
    onlyNum: RegExp;
    onlyNumDot: RegExp;
    onlyKor: RegExp;
};

type StandardGrade =
    | 'first'
    | 'second'
    | 'third'
    | 'fourth'
    | 'fifth'
    | 'nothing';

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
    // 나중에 서버 완성 후 각 번호에 따른 학생의 정보를 props로 받을 예정 (성별, 학년 정보를 위해)
    const standard = new Standard();
    const [isErrorMsg, setIsErrorMsg] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [grade, setGrade] = useState<StandardGrade>('nothing');

    // 라벨을 통해 측정 기준에 맞는 측정 함수(measurator) 불러오기
    const getStandardFunc = (label: string) => {
        switch (label) {
            case '오래달리기-걷기':
                return standard.longRunningAndWalking;
            case '왕복오래달리기':
                return standard.roundRunning;
            case '스텝검사':
                return standard.stepCheck;
            case '앉아윗몸앞으로굽히기':
                return standard.bendingForward;
            case '종합유연성검사':
                return standard.totalFlex;
            case '팔굽혀펴기':
                return standard.pushUps;
            case '악력':
                return standard.grip;
            case '50미터달리기':
                return standard.running50m;
            case '제자리멀리뛰기':
                return standard.longJump;
            default:
                return standard.bendingForward;
        }
    };
    // 인풋에 들어간 입력값에 대한 등급을 매겨주는 함수
    const gradeMeasurator = getStandardFunc(label);

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

        if (label !== '이름' && label !== '번호') {
            const gradeResult = gradeMeasurator(val, '중2', 'man');
            if (val && gradeResult) {
                setGrade(gradeResult);
            } else {
                setGrade('nothing');
            }
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
            sx={{ backgroundColor: gradeColor[grade], borderRadius: '5px' }}
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
    nothing: '',
};

export default CustomTextField;

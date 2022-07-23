import TextField from "@mui/material/TextField";
import { useState } from 'react';
import hp from "../core/Hp";

type PatternType = {
    onlyNum: RegExp;
    onlyNumDot: RegExp;
    onlyKor: RegExp;
}

const patternObj: PatternType = {
    onlyNum: /[^0-9]/gi,
    onlyNumDot: /[^0-9.]/gi,
    onlyKor: /[^ㄱ-ㅎㅏ-ㅣ가-힣]/gi
}

const restrictMessages = {
    onlyNum: '숫자만 입력 가능합니다.',
    onlyNumDot: '숫자 형식으로 입력해주세요.',
    onlyKor: '한글만 입력 가능합니다.'
}

function CustomTextField({label, pattern}: {label: string, pattern?: RegExp | keyof PatternType}) {
    const [isErrorMsg, setIsErrorMsg] = useState(false);

    return (
        <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            color="success"
            label={label}
            InputLabelProps={{style: { fontSize: 12, textAlign: "center" }}}
            margin="dense"
            onChange={(e) => {
                let val = e.target.value;
                let msg = '';

                // 패턴 항목 체크
                if (typeof pattern === 'string') {
                    msg = restrictMessages[pattern]
                    pattern = patternObj[pattern]
                }
                
                // 패턴 체크
                if (pattern) val = val.replace(pattern, "");

                // 입력 불가항목
                if (e.target.value !== val) {
                    setIsErrorMsg(true);
                    setTimeout(() => { setIsErrorMsg(false); }, 1000)
                    e.target.value = val;

                    // 지금은 로그로만 제한 메시지 주고있는데 UI 얘기해봐야할듯.. 칸이 너무 작음
                    hp.warnLog(msg);
                }
            }}

        >

        </TextField>
    )
}

export default CustomTextField
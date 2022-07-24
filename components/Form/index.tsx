import styled from "styled-components";
import { useMemo } from "react";
import TextField from "@mui/material/TextField";
import CustomTextField from "../Material/CustomTextField";

type FormProps = {
  classData: any;
};

const Form = ({ classData }: FormProps) => {
  // 학급마다 측정 리스트(paps 리스트)가 달라짐 => 데이터 받아와서 해당 학급 측정 리스트로 렌더링
  const papsList = [
    classData.endurance,
    classData.flexibility,
    classData.strength,
    classData.speediness,
    "BMI",
  ];

  // 번호와 이름으로 구성된 고정된 테이블 => useMemo로 불필요한 리렌더링 방지
  const fixedTable = useMemo(() => {
    return Array(+classData.number)
      .fill(null)
      .map((_, idx): any => {
        return (
          <>
            <tr>
              <td>
                <CustomTextField label="번호" pattern="onlyNum" />
              </td>
              <td>
                <CustomTextField label="이름" pattern="onlyKor" />
              </td>
            </tr>
          </>
        );
      });
  }, [classData]);

  // PAPS 측정 종목으로 이루어진 동적인 테이블 => useMemo로 불필요한 리렌더링 방지
  const movedTable = useMemo(() => {
    return Array(+classData.number)
      .fill(null)
      .map((_, idx): any => {
        return (
          <>
            <tr>
              {[...papsList].map((el) => {
                return (
                  <>
                    <td>
                      <CustomTextField label={el} pattern="onlyNumDot" />
                    </td>
                  </>
                );
              })}
            </tr>
          </>
        );
      });
  }, [classData]);

  return (
    <FormContainer>
      <FixedCol>
        <table>
          <th className="num">번호</th>
          <th className="name">이름</th>
          <>{fixedTable}</>
        </table>
      </FixedCol>
      <MovedCol>
        <table>
          <>
            {[...papsList].map((el) => (
              <th key={el}>{el}</th>
            ))}
          </>
          <>{movedTable}</>
        </table>
      </MovedCol>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  scrollbar-width: none;
  display: flex;
  width: 100%;
  max-width: 1000rem;
  overflow: scroll;
  margin-bottom: 2rem;
`;

const FixedCol = styled.div`
  width: 75%;
  position: sticky;
  left: 0;
  background-color: white;
  z-index: 4;

  th {
    font-size: 0.7rem;
  }

  tr {
    input {
      font-size: 0.8rem;
      text-align: center;
    }
  }

  .num {
    width: 30%;
  }

  .name {
    width: 40%;
  }
`;

const MovedCol = styled.div`
  width: 100%;

  table {
    overflow: scroll;
    width: 300%;
  }

  tr {
    input {
      font-size: 0.8rem;
      text-align: center;
    }
  }

  th {
    font-size: 0.7rem;
    position: sticky;
    top: 0;
  }
`;

export default Form;

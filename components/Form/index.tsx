import styled from 'styled-components';
import { useMemo, useState } from 'react';
import TextField from '@mui/material/TextField';
import CustomTextField from '../Material/CustomTextField';

type FormProps = {
    classData: any;
};

// 학급에 속한 학생 리스트 초기 상태값 (리덕스에서 가져 옴)
const initialState = [
    {
        id: '',
        classId: '',
        name: '',
        email: '',
        imageUrl: '',
        classNum: '',
        sex: '',
        age: '',
        grade: '',
        school: '',
        schoolName: '',
        record: {
            endurance: '',
            flexibility: '',
            strength: '',
            speediness: '',
            bmi: '',
        },
    },
    {
        id: '',
        classId: '',
        name: '',
        email: '',
        imageUrl: '',
        classNum: '',
        sex: '',
        age: '',
        grade: '',
        school: '',
        schoolName: '',
        record: {
            endurance: '',
            flexibility: '',
            strength: '',
            speediness: '',
            bmi: '',
        },
    },
    {
        id: 'dfr4gadfd',
        classId: '',
        name: '김민규',
        email: 'alsrb2918@gmail.com',
        imageUrl:
            'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80',
        classNum: '3',
        sex: 'M',
        age: '17',
        grade: '고1',
        school: 'high',
        schoolName: '능곡중학교',
        record: {
            endurance: '343',
            flexibility: '23',
            strength: '53',
            speediness: '76',
            bmi: '33',
        },
    },
    {
        id: '',
        classId: '',
        name: '',
        email: '',
        imageUrl: '',
        classNum: '',
        sex: '',
        age: '',
        grade: '',
        school: '',
        schoolName: '',
        record: {
            endurance: '',
            flexibility: '',
            strength: '',
            speediness: '',
            bmi: '',
        },
    },
    {
        id: '',
        classId: '',
        name: '',
        email: '',
        imageUrl: '',
        classNum: '',
        sex: '',
        age: '',
        grade: '',
        school: '',
        schoolName: '',
        record: {
            endurance: '',
            flexibility: '',
            strength: '',
            speediness: '',
            bmi: '',
        },
    },
];

const Form = ({ classData }: FormProps) => {
    // 학급마다 측정 리스트(paps 리스트)가 달라짐 => 데이터 받아와서 해당 학급 측정 리스트로 렌더링
    const papsList = [
        classData.endurance,
        classData.flexibility,
        classData.strength,
        classData.speediness,
        '키',
        '몸무게',
    ];

    const [studentsList, setStudentList] = useState(initialState);

    // 번호와 이름으로 구성된 고정된 테이블 => useMemo로 불필요한 리렌더링 방지
    const fixedTable = useMemo(() => {
        return Array(+classData.number)
            .fill(null)
            .map((_, idx): any => {
                return (
                    <>
                        <tr>
                            <td>
                                <CustomTextField
                                    label="번호"
                                    pattern="onlyNum"
                                    fixedValue={idx + 1}
                                    number={idx + 1}
                                    name="number"
                                />
                            </td>
                            <td>
                                <CustomTextField
                                    label="이름"
                                    pattern="onlyKor"
                                    number={idx + 1}
                                    data={studentsList[idx].name}
                                    setData={setStudentList}
                                    name="name"
                                />
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
                            <td>
                                <CustomTextField
                                    label={papsList[0]}
                                    pattern="onlyNumDot"
                                    number={idx + 1}
                                    data={studentsList[idx].record.endurance}
                                    setData={setStudentList}
                                    name="endurance"
                                />
                            </td>
                            <td>
                                <CustomTextField
                                    label={papsList[1]}
                                    pattern="onlyNumDot"
                                    number={idx + 1}
                                    data={studentsList[idx].record.flexibility}
                                    setData={setStudentList}
                                    name="flexibility"
                                />
                            </td>
                            <td>
                                <CustomTextField
                                    label={papsList[2]}
                                    pattern="onlyNumDot"
                                    number={idx + 1}
                                    data={studentsList[idx].record.strength}
                                    setData={setStudentList}
                                    name="strength"
                                />
                            </td>
                            <td>
                                <CustomTextField
                                    label={papsList[3]}
                                    pattern="onlyNumDot"
                                    number={idx + 1}
                                    data={studentsList[idx].record.speediness}
                                    setData={setStudentList}
                                    name="speediness"
                                />
                            </td>
                            <td>
                                <CustomTextField
                                    label={papsList[4]}
                                    pattern="onlyNumDot"
                                    number={idx + 1}
                                    data={studentsList[idx].record}
                                    setData={setStudentList}
                                    name="bmi"
                                />
                            </td>
                            <td>
                                <CustomTextField
                                    label={papsList[5]}
                                    pattern="onlyNumDot"
                                    number={idx + 1}
                                    data={studentsList[idx].record}
                                    setData={setStudentList}
                                    name="bmi"
                                />
                            </td>
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
                        {[...papsList].map(el => (
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
    width: 100%;
    height: 20rem;
    position: sticky;
    left: 0;
    background-color: white;
    z-index: 4;
    table {
        width: 9rem;
    }

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
    width: 80%;

    table {
        overflow: scroll;
        width: 250%;
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

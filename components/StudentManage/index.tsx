import styled from 'styled-components';
import InfoList from '../InfoList';

const StudentManage = ({ students }: any) => {
    return (
        <Container>
            <h2>학생 관리</h2>
            <ul>
                {students.length !== 0 ? (
                    [...students].map((student, idx) => {
                        return (
                            <InfoList
                                src={student.imageUrl}
                                name={student.name}
                                key={idx}
                            ></InfoList>
                        );
                    })
                ) : (
                    <h3>가입된 학생이 없습니다.</h3>
                )}
            </ul>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    ul {
        padding: 0;
    }

    h2 {
        font-size: 1.1rem;
    }

    h3 {
        font-size: 1rem;
        color: #808080af;
        text-align: center;
    }
`;

export default StudentManage;

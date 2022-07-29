import styled from 'styled-components';
import InfoList from '../InfoList';

const Register = ({ pending }: any) => {
    return (
        <Container>
            <h2>가입요청 목록</h2>
            <ul>
                {pending.length !== 0 ? (
                    [...pending].map((student, idx) => {
                        return (
                            <InfoList
                                src={student.imageUrl}
                                name={student.name}
                                key={idx}
                            ></InfoList>
                        );
                    })
                ) : (
                    <h3>가입 요청이 없습니다.</h3>
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
        font-size: 1.5rem;
        color: #808080af;
        text-align: center;
    }
`;

export default Register;

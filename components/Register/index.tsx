import styled from "styled-components";
import InfoList from "../InfoList";

const Register = () => {
  return (
    <Container>
      <h2>가입요청 목록</h2>
      <ul>
        <InfoList
          src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
          name="김민규"
        ></InfoList>
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
`;

export default Register;

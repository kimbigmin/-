import styled from "styled-components";
import InfoList from "../InfoList";

const StudentManage = () => {
  return (
    <Container>
      <h2>학생 관리</h2>
      <ul>
        <InfoList
          src="https://images.unsplash.com/photo-1562124638-724e13052daf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
          name="조수훈"
        ></InfoList>
        <InfoList
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
          name="박지선"
        ></InfoList>
        <InfoList
          src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1834&q=80"
          name="서태규"
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

export default StudentManage;

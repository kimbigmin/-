import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styled from "styled-components";

function Header() {
  return (
    <Layout>
      <ArrowBackIosIcon></ArrowBackIosIcon>
      <h1>Health PAPS</h1>
    </Layout>
  );
}

const Layout = styled.header`
  display: flex;
  padding: 1rem;
  align-items: center;
  max-height: 5rem;

  h1 {
    font-size: 1.3rem;
    justify-self: center;
  }
`;

export default Header;

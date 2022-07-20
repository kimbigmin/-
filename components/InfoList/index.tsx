import styled from "styled-components";
import Image from "next/image";

type InfoListProps = {
  src: string;
  name: string;
};

const InfoList = ({ src, name }: InfoListProps) => {
  return (
    <StudentInfo>
      {/* Image 컴포넌트로 대체해야 됨*/}
      <img src={src} alt="student"></img>
      <ul>
        <li className="name">{name}</li>
        <li className="class">능곡중학교 3학년 2반</li>
      </ul>
    </StudentInfo>
  );
};

const StudentInfo = styled.li`
  display: flex;
  flex-direction: row;
  border: 0.2px solid #9f9f9f;
  align-items: center;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 0.5rem;

  img {
    width: 50px;
    border-radius: 50%;
  }

  ul {
    margin-left: 1rem;
    .name {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 3px;
    }

    .class {
      font-size: 0.8rem;
      color: #7b7b7b;
    }
  }
`;

export default InfoList;

import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { TopBar } from "../../styles/TopBar";
import { Layout } from "../../styles/Layout";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import axios from "axios";

interface IClass {
  name: string;
  number: string;
  school: string;
  grade: number;
  endurance: string;
  flexibility: string;
  strength: string;
  speediness: string;
}

/** 반 생성 페이지 **/
const Teacher_CreatePage: NextPage = () => {
  const initialState: IClass = {
    name: "",
    number: "",
    school: "",
    grade: 0,
    endurance: "",
    flexibility: "",
    strength: "",
    speediness: "",
  };

  const [selectedItems, setSelectedItems] = useState(initialState);

  console.log(selectedItems);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setSelectedItems((current: IClass) => {
      return {
        ...current,
        [name]: value,
      };
    });
  };

  const handleButton = async () => {
    const newID = Math.random().toString(36).substr(2, 16);

    const res = await axios.post(`http://localhost:4000/class`, {
      teacherId: "park123",
      classId: newID,
      ...selectedItems,
    });
  };

  return (
    <>
      <Head>
        <title>Health-PAPS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <TopBar>
          <h2>새로운 학급 생성</h2>
        </TopBar>
        <FormContainer>
          <FormBox>
            <h3>기본 정보</h3>
            <TextField
              id="standard-basic"
              label="학급 이름"
              variant="standard"
              sx={{ minWidth: "80%", marginBottom: "2rem" }}
              color="success"
              value={selectedItems.name}
              onChange={handleChange}
              name="name"
            />
            <TextField
              id="standard-basic"
              label="학생 수"
              variant="standard"
              sx={{ minWidth: "80%", marginBottom: "2rem" }}
              color="success"
              value={selectedItems.number}
              onChange={handleChange}
              name="number"
            />
            <FormControl
              variant="standard"
              sx={{ minWidth: "80%", marginBottom: "2rem" }}
              color="success"
            >
              <InputLabel id="demo-simple-select-standard-label">
                학교급
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                name="school"
                value={selectedItems.school}
                onChange={handleChange}
              >
                <MenuItem value={"초등학교"}>초등학교</MenuItem>
                <MenuItem value={"중학교"}>중학교</MenuItem>
                <MenuItem value={"고등학교"}>고등학교</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant="standard"
              sx={{ minWidth: "80%", marginBottom: "2rem" }}
              color="success"
            >
              <InputLabel id="demo-simple-select-standard-label">
                학년
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                name="grade"
                value={selectedItems.grade}
                onChange={handleChange}
                label="grade"
              >
                <MenuItem value={1}>1학년</MenuItem>
                <MenuItem value={2}>2학년</MenuItem>
                <MenuItem value={3}>3학년</MenuItem>
                <MenuItem value={4} disabled={true}>
                  4학년
                </MenuItem>
                <MenuItem value={5} disabled={true}>
                  5학년
                </MenuItem>
                <MenuItem value={6} disabled={true}>
                  6학년
                </MenuItem>
              </Select>
            </FormControl>
          </FormBox>
          <FormBox>
            <h3>측정 기준</h3>
            <FormControl
              variant="standard"
              sx={{ minWidth: "80%", marginBottom: "2rem" }}
              color="success"
            >
              <InputLabel id="demo-simple-select-standard-label">
                심폐지구력 측정
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={selectedItems.endurance}
                onChange={handleChange}
                name="endurance"
                label="endurance"
              >
                <MenuItem value={"왕복오래달리기"}>왕복오래달리기</MenuItem>
                <MenuItem value={2}>2학년</MenuItem>
                <MenuItem value={3}>3학년</MenuItem>
                <MenuItem value={4} disabled={true}>
                  4학년
                </MenuItem>
                <MenuItem value={5} disabled={true}>
                  5학년
                </MenuItem>
                <MenuItem value={6} disabled={true}>
                  6학년
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant="standard"
              sx={{ minWidth: "80%", marginBottom: "2rem" }}
              color="success"
            >
              <InputLabel id="demo-simple-select-standard-label">
                유연성 측정
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={selectedItems.flexibility}
                onChange={handleChange}
                name="flexibility"
                label="flexibility"
              >
                <MenuItem value={"왕복오래달리기"}>왕복오래달리기</MenuItem>
                <MenuItem value={2}>2학년</MenuItem>
                <MenuItem value={3}>3학년</MenuItem>
                <MenuItem value={4} disabled={true}>
                  4학년
                </MenuItem>
                <MenuItem value={5} disabled={true}>
                  5학년
                </MenuItem>
                <MenuItem value={6} disabled={true}>
                  6학년
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant="standard"
              sx={{ minWidth: "80%", marginBottom: "2rem" }}
              color="success"
            >
              <InputLabel id="demo-simple-select-standard-label">
                근력 및 근지구력 측정
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={selectedItems.strength}
                onChange={handleChange}
                name="strength"
                label="strength"
              >
                <MenuItem value={"왕복오래달리기"}>왕복오래달리기</MenuItem>
                <MenuItem value={2}>2학년</MenuItem>
                <MenuItem value={3}>3학년</MenuItem>
                <MenuItem value={4} disabled={true}>
                  4학년
                </MenuItem>
                <MenuItem value={5} disabled={true}>
                  5학년
                </MenuItem>
                <MenuItem value={6} disabled={true}>
                  6학년
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant="standard"
              sx={{ minWidth: "80%", marginBottom: "2rem" }}
              color="success"
            >
              <InputLabel id="demo-simple-select-standard-label">
                순발력 측정
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={selectedItems.speediness}
                onChange={handleChange}
                name="speediness"
                label="speediness"
              >
                <MenuItem value={"왕복오래달리기"}>왕복오래달리기</MenuItem>
                <MenuItem value={2}>2학년</MenuItem>
                <MenuItem value={3}>3학년</MenuItem>
                <MenuItem value={4} disabled={true}>
                  4학년
                </MenuItem>
                <MenuItem value={5} disabled={true}>
                  5학년
                </MenuItem>
                <MenuItem value={6} disabled={true}>
                  6학년
                </MenuItem>
              </Select>
            </FormControl>
          </FormBox>
          <button onClick={handleButton}>생성하기</button>
        </FormContainer>
      </Layout>
    </>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  max-width: 50rem;

  button {
    text-align: center;
    border: 0;
    width: 100%;
    font-size: 1rem;
    font-weight: 600;
    background-color: #66bb6a;
    color: white;
    border-radius: 5px;
    max-width: 50rem;
    margin-top: 1rem;
    padding: 1rem;

    &:hover {
      background-color: #338a3e;
      transition-duration: 0.5s;
    }
  }
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 2rem;
`;

export default Teacher_CreatePage;

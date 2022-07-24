import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { CardBox } from "../../../styles/Card";
import { TopBar } from "../../../styles/TopBar";
import { Layout } from "../../../styles/Layout";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";
import { useEffect, useState } from "react";

interface IClassInfo {
  [key: string]: string;
}

/** 선생님이 관리하고 있는 반 리스트 페이지 (메인 페이지에서 측정 결과 입력 누르면 여기로 이동) **/
const Teacher_ListPage: NextPage = () => {
  // 관리하고 있는 학급 목록
  const [classList, setClassList] = useState<IClassInfo[] | undefined>();

  // DB에서 모든 class 리스트 불러와서 선생님이 관리하는 학급만 필터링 후 classList에 할당 => 나중에 서버에서 필터링해서 redux로 관리할 듯...
  useEffect(() => {
    const getClassList = async () => {
      const res = await axios.get(`http://localhost:4000/class`);

      const classList = res.data.filter(
        (el: any) => el.teacherId === "park123"
      );
      setClassList(classList);
    };
    getClassList();
  }, []);

  // 관리하고 있는 학급 리스트 생성하는 함수
  const createClassList = () => {
    if (classList) {
      return classList.map((el, idx) => {
        return (
          <Link key={el.id} href={`/teacher/list/${el.classId}`}>
            <List>
              <h3>{el.name}</h3>
              <ArrowForwardIosIcon fontSize="small"></ArrowForwardIosIcon>
            </List>
          </Link>
        );
      });
    }
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
          <h2>학급 목록</h2>
          <Link href="/teacher/create">
            <button>새로운 학급 생성</button>
          </Link>
        </TopBar>
        <CardBox style={{ maxWidth: "60rem", width: "100%" }}>
          {createClassList()}
        </CardBox>
      </Layout>
    </>
  );
};

const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  width: 100%;
  /* border: 1px #00000025 solid; */
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export default Teacher_ListPage;

import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import logo from '../public/healthpaps_logo.png';
import React from 'react';
import hp from '../core/Hp';

const Home: NextPage = () => {
    // const onClick = (e: React.MouseEvent<HTMLElement>) => {
    //     const type = (e.currentTarget as HTMLInputElement).name;

    //     hp.setState('userType', type);
    // }

    return (
        <>
            <Main>
                <Image src={logo} alt="logo"></Image>
                <LoginBtnBox>
                    <Link href="/student">
                        <Button name="S">
                            <h2>학생 로그인</h2>
                        </Button>
                    </Link>
                    <Link href="/teacher">
                        <Button name="T">
                            <h2>선생님 로그인</h2>
                        </Button>
                    </Link>
                </LoginBtnBox>
            </Main>
        </>
    );
};

// 추후 재사용을 위한 style 컴포넌트 디렉토리로 따로 관리 => 스타일 파일은 어떻게 관리할 지 나중에 얘기

const Main = styled.main`
    min-height: 100vh;
    padding: 4rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        color: #338a3e;
    }
`;

const Button = styled.button`
    text-align: center;
    border: 0;
    width: 100%;
    font-size: 0.7rem;
    background-color: #66bb6a;
    color: white;
    border-radius: 5px;
    max-width: 20rem;
    margin-top: 1rem;
`;

const LoginBtnBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    justify-content: space-around;
    align-items: center;
    width: 80%;
`;

export default Home;

import React from 'react';
import logo from '../../healthpaps_logo.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function LoginPage() {
    // const onClick = (e: React.MouseEvent<HTMLElement>) => {
    //     const type = (e.currentTarget as HTMLInputElement).name;

    //     hp.setState('userType', type);
    // }
    return (
        <Main>
            <img src={logo} alt="logo" />
            <LoginBtnBox>
                <Button name="S">
                    <Link to="/student">
                        <h2>학생 로그인</h2>
                    </Link>
                </Button>
                <Button name="T">
                    <Link to="/teacher">
                        <h2>선생님 로그인</h2>
                    </Link>
                </Button>
            </LoginBtnBox>
        </Main>
    );
}

// 추후 재사용을 위한 style 컴포넌트 디렉토리로 따로 관리 => 스타일 파일은 어떻게 관리할 지 나중에 얘기

const Main = styled.main`
    min-height: 100vh;
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
    background-color: #66bb6a;
    color: white;
    border-radius: 5px;
    max-width: 20rem;
    margin-top: 1rem;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 700;
`;

const LoginBtnBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 80%;
`;

export default LoginPage;

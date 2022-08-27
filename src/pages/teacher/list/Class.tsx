import { TopBar } from '../../../styles/TopBar';
import { Layout } from '../../../styles/Layout';
import styled from 'styled-components';
import { useState, useCallback, useEffect } from 'react';
import Form from '../../../components/Form';
import Register from '../../../components/Register';
import StudentManage from '../../../components/StudentManage';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../../../store/class/classSlice';

/** 학급 페이지 **/
const Teacher_ClassPage = () => {
    // 렌더링 시범용 학생수
    const { id } = useParams();
    const [clickedNav, setClickedNav] = useState('PAPS 기록');
    const navbar = ['PAPS 기록', '가입 요청', '학생 관리'];

    const classData = useSelector((state: any) => state.class);

    console.log(classData);

    const handleNavbar = useCallback((e: any) => {
        setClickedNav(e.target.innerText);
    }, []);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            getData({ id: '8f472b3c-88d5-4b8b-80bd-af1bcc263737', num: 5 }),
        );
    }, []);

    return (
        <>
            <Layout style={{ overflow: 'hidden' }}>
                <TopBar>
                    <h2>{`${classData.name} 페이지`}</h2>
                </TopBar>
                <Nav>
                    <ul>
                        {navbar.map((el, idx) => {
                            return (
                                <li
                                    key={idx}
                                    className={
                                        clickedNav === el ? 'selected' : ''
                                    }
                                    onClick={handleNavbar}
                                >
                                    {el}
                                </li>
                            );
                        })}
                    </ul>
                </Nav>

                {clickedNav === 'PAPS 기록' ? (
                    <>
                        <ColorBar>
                            <ul>
                                <li>
                                    <div className="first"></div>1등급
                                </li>
                                <li>
                                    <div className="second"></div>2등급
                                </li>
                                <li>
                                    <div className="third"></div>3등급
                                </li>
                                <li>
                                    <div className="fourth"></div>4등급
                                </li>
                                <li>
                                    <div className="fifth"></div>5등급
                                </li>
                            </ul>
                        </ColorBar>
                        <Form></Form>
                        <ButtonBox>
                            <Button>저장하기</Button>
                            <Button
                                style={{
                                    backgroundColor: 'white',
                                    color: '#66bb6a',
                                    border: '1px solid #66bb6a',
                                }}
                            >
                                엑셀로 내보내기
                            </Button>
                        </ButtonBox>
                    </>
                ) : clickedNav === '가입 요청' ? (
                    <Register pending={[]}></Register>
                ) : (
                    <StudentManage students={[]}></StudentManage>
                )}
            </Layout>
        </>
    );
};

const Nav = styled.nav`
    width: 100%;
    margin-bottom: 0.5rem;
    ul {
        margin: 0;
        display: flex;
        justify-content: space-around;
        padding: 0;
        text-align: center;
    }

    li {
        font-size: 0.9rem;
        width: 100%;
        padding: 0.5rem;
    }

    .selected {
        border-bottom: 3px solid #338a3e;
    }
`;

const ColorBar = styled.div`
    width: 100%;
    ul {
        display: flex;
        justify-content: space-around;
        padding: 0;
        margin: 2rem 0rem 2rem;
    }

    li {
        display: flex;
        font-size: 0.7rem;
        align-items: center;
    }

    .first {
        background-color: #178bffb2;
        width: 15px;
        height: 10px;
        margin-right: 5px;
    }
    .second {
        background-color: #40d43ba2;
        width: 15px;
        height: 10px;
        margin-right: 5px;
    }
    .third {
        background-color: #e7ee2d9f;
        width: 15px;
        height: 10px;
        margin-right: 5px;
    }
    .fourth {
        background-color: #ee942d97;
        width: 15px;
        height: 10px;
        margin-right: 5px;
    }
    .fifth {
        background-color: #e53838a4;
        width: 15px;
        height: 10px;
        margin-right: 5px;
    }
`;

const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    z-index: 20;
    width: 100%;
    background-color: white;
    max-width: 40rem;
`;

const Button = styled.button`
    text-align: center;
    border: 0;
    width: 80%;
    font-size: 1rem;
    font-weight: 600;
    background-color: #66bb6a;
    color: white;
    max-width: 50rem;
    padding: 1rem;

    &:hover {
        background-color: #338a3e;
        transition-duration: 0.5s;
    }
`;

export default Teacher_ClassPage;

import { CardBox } from '../../../styles/Card';
import { TopBar } from '../../../styles/TopBar';
import { Layout } from '../../../styles/Layout';
import styled from 'styled-components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

interface ClassInfo {
    classId: string;
    endurance: string;
    flexibility: string;
    grade: string;
    id: string;
    name: string;
    number: string;
    pending: Object[];
    school: string;
    speediness: string;
    strength: string;
    students: Object[];
    teacherId: string;
}

/** 선생님이 관리하고 있는 반 리스트 페이지 (메인 페이지에서 측정 결과 입력 누르면 여기로 이동) **/
const Teacher_ListPage = () => {
    // 관리하고 있는 학급 목록
    const classList: any = useSelector<any>(
        state => state.user.user.managing.items,
    );
    console.log(classList);

    // 관리하고 있는 학급 리스트 생성하는 함수
    const createClassList = () => {
        if (classList) {
            return classList.map((el: any, idx: number) => {
                return (
                    <List>
                        <Link
                            className="link"
                            key={el.id}
                            to={`/teacher/list/${el.id}`}
                        >
                            <h3>{el.name}</h3>
                            <ArrowForwardIosIcon fontSize="small"></ArrowForwardIosIcon>
                        </Link>
                    </List>
                );
            });
        }
    };

    return (
        <>
            <Layout>
                <TopBar>
                    <h2>학급 목록</h2>
                    <Link to="/teacher/create">
                        <button>새로운 학급 생성</button>
                    </Link>
                </TopBar>
                <CardBox
                    style={{
                        maxWidth: '60rem',
                        width: '100%',
                        marginTop: '2rem',
                    }}
                >
                    {createClassList()}
                </CardBox>
            </Layout>
        </>
    );
};

const List = styled.li`
    width: 100%;
    .link {
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: left;
        width: 100%;
        /* border: 1px #00000025 solid; */
        padding: 1.3rem;
        margin-bottom: 1.5rem;
        font-size: 1.2rem;
        font-weight: 700;
        border-radius: 10px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
`;

export default Teacher_ListPage;

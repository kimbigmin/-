import { Card, CardBox } from '../../styles/Card';
import { useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getStudent } from '../../graphql/queries';
import userReducer from '../../store/user/User';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

/** 학생 로그인 후 학생 메인 페이지 **/
const Student_MainPage = () => {
    const dispatch = useDispatch();

    const fetchUser = async () => {
        try {
            const result = await API.graphql(
                graphqlOperation(getStudent, {
                    id: '980241b2-12c1-4c62-9913-356797410a3d',
                }),
            );
            dispatch({ type: 'user/LOGIN', payload: result });
        } catch (err) {
            throw new Error(`로그인 정보를 불러 올 수 없습니다. : ${err}`);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <>
            <main>
                <CardBox>
                    {/** url은 나중에 이미지 public에 저장해서 경로 사용 **/}
                    <Card
                        url="https://images.unsplash.com/photo-1584415942461-0b87dda9cc2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                        onClick={() => {
                            // 2차 비밀번호 입력
                        }}
                    >
                        <Link to="/student/result">
                            <h2>PAPS 측정 결과</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quidem possimus facere amet
                                nostrum cupiditate ea, atque temporibus sed!
                            </p>
                        </Link>
                    </Card>

                    {/** url은 나중에 이미지 public에 저장해서 경로 사용 **/}
                    <Card url="https://images.unsplash.com/photo-1617602378661-9da776b6a807?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80">
                        <Link to="/student/analysis">
                            <h2>분석 페이지</h2>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Vitae, soluta quam.
                            </p>
                        </Link>
                    </Card>
                </CardBox>
            </main>
        </>
    );
};

export default Student_MainPage;

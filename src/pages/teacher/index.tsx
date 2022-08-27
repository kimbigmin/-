import { Card, CardBox } from '../../styles/Card';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userLogin } from '../../store/user/userSlice';
import { Link } from 'react-router-dom';

/** 선생님 로그인 후 메인 페이지 **/
const Teacher_MainPage = () => {
    const dispatch = useDispatch();

    // 선생님 정보 불러오는 fetch함수
    useEffect(() => {
        dispatch(userLogin(undefined));
    }, []);

    return (
        <>
            <main>
                <CardBox>
                    <Card url="https://images.unsplash.com/photo-1508962914676-134849a727f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80">
                        <Link to="/teacher/list">
                            <h2>PAPS 측정 결과 입력</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quidem possimus facere amet
                                nostrum cupiditate ea, atque temporibus sed!
                            </p>
                        </Link>
                    </Card>

                    <Card url="https://images.unsplash.com/photo-1618073194091-9b24230ddb2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80">
                        <Link to="/teacher/method">
                            <h2>PAPS 측정 방법</h2>
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

export default Teacher_MainPage;

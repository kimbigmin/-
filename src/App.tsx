import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login';
import TeacherPage from './pages/teacher';
import StudentPage from './pages/student';
import Header from '../src/components/Header';
import TeacherClassListPage from './pages/teacher/list';
import TeacherCreateClassPage from './pages/teacher/create';
import ClassPage from './pages/teacher/list/Class';

function App() {
    const isLogin = true;
    return (
        <>
            {isLogin ? <Header /> : null}
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />}></Route>
                    <Route path="/student" element={<StudentPage />}></Route>
                    <Route path="/teacher" element={<TeacherPage />}></Route>
                    <Route
                        path="/teacher/list"
                        element={<TeacherClassListPage />}
                    ></Route>
                    <Route
                        path="/teacher/create"
                        element={<TeacherCreateClassPage />}
                    ></Route>
                    <Route
                        path="/teacher/list/:id"
                        element={<ClassPage />}
                    ></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;

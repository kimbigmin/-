import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Health PAPS</a>
        </h1>

        <p className={styles.description}>Hello PAPS? Health PAPS!</p>
        <p>체력측정의 새로운 기준을 제시하다.</p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>학생 로그인 &rarr;</h2>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>선생님 로그인 &rarr;</h2>
          </a>
        </div>
      </main>
    </div>
  );
};
export default Home;

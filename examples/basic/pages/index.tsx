import Head from "next/head";
import styles from "../styles/Home.module.css";
import useDetectPrint from "react-detect-print";

export default function Home() {
  const printing = useDetectPrint();
  const color = printing ? "blue" : "red";

  return (
    <>
      <Head>
        <title>react-detect-print example - basic</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main} style={{ borderColor: color }}>
        <h1 style={{ color }}>{printing ? "PRINT" : "VIEW"}</h1>
        <p>Try printing this page...</p>
      </main>
    </>
  );
}

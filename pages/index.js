import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Github Jobs API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        Use{" "}
        <span style={{ color: "blue" }}>
          {" "}
          <Link href="api/launches" target="_blank" rel="noopener noreferrer">
            this URL
          </Link>{" "}
        </span>{" "}
        to get the data
      </p>
      <div
        style={{ display: "flex", alignItems: "center", textAlign: "center" }}
      >
        <p>
          Thanks to{" "}
          <a
            href="https://nextjs.org/docs/api-routes/introduction"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue" }}
          >
            Next.js API Routes
          </a>
          {" ♥"}
        </p>
      </div>
    </div>
  );
}

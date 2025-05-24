import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import utilStyles from '../styles/utils.module.css';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className={utilStyles.headingMd}>
        <p>Welcome to my Blog!</p>
        <p><Link href="/posts/first-post">Check out my first post</Link></p>
      </div>
     </>
    );
}
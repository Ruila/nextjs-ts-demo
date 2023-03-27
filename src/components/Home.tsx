import React from "react";
import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.css'
import useSWR from 'swr'


const fetcher = (url: string) => fetch(url).then(r => r.json());
const inter = Inter({subsets: ['latin']})
export default function Home() {

    const {data, error} = useSWR(
        "https://jsonplaceholder.typicode.com/todos/2",
        fetcher,
        {}
    );
    return (<h2 className={`${inter.className} ${styles.fontRed} text-3xl font-bold underline`}>
        Home: {data?.title}
    </h2>)
}

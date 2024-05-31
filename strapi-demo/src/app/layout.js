import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/globals.css'
import Head from "next/head";
import Script from 'next/script'
import config from "@/config";
import Header from "./components/Header/Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Headless Blog"
};
  

const RootLayout = ({ children }) => (
  <html lang="en">
    <Head>
    <title>Coca</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="asset\css\main.css" />
    <link rel="stylesheet" href="asset\css\responsive.css" />
    </Head>
    <body className={inter.className}>
    <Header />
    {children}
    </body>
    <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></Script>
    <Script src="asset\js\main.js"></Script>
  </html>
);

export default RootLayout
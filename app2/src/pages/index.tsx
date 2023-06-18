import Image from 'next/image'
import { Inter } from 'next/font/google'
import dynamic from "next/dynamic"
import Content from '@/components/Content';

const inter = Inter({ subsets: ['latin'] })
const Nav = dynamic(() => import("app1/nav"))
const Footer = dynamic(() => import("app1/footer"));


export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Nav>This is the nav in app 2</Nav>
      <Content>FROM APP 2</Content>

      <Footer>This is the footer in app 2</Footer>
    </main>
  )
}

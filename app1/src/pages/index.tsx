import Image from 'next/image'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const Content = dynamic(() => import('app2/content'))

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Nav> APP 1</Nav>
      </div>

      <Content>WELCOME TO THE APP 1, THIS COMPONENT COME FROM APP 2 TO APP1</Content>

      <Footer> APP 1</Footer>
    </main>
  )
}

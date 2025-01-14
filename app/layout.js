import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/layouts/Header'
import mongodbConnect from '@/backend/lib/mongodb'
import { GlobalProvider } from "./GlobalProvider"

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'PATHY',
  description: 'นิยายออนไลน์',
};

export default async function RootLayout({ children }) {
  await mongodbConnect()
  return (
    
    <html lang="en">
      <title>PATHY</title>
      <body className={inter.className}>
        <div className='xl:pt-18 md:pt-17 pt-20'>
          <Header />
        </div>
        <GlobalProvider>
        <div className='xl:pt-3 md:pt-2 pt-1'>
          {children}
        </div>
        </GlobalProvider>
      </body>
    </html>
  )
}
import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'

export const metadata = {
  title: 'PRODIGY_WD_01',
  description: 'Task 1: Interactive Navigation Menu',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='w-screen h-screen overflow-hidden'>
      <body className="w-full h-full overflow-x-hidden overflow-y-scroll scrollbar-hidden relative  bg-[url('/images/bg.webp')] bg-fixed bg-cover bg-center bg-no-repeat">
        <Header />
        <main className='w-full flex flex-col'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

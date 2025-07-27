// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import NavBar from '@/component/NavBar'

export const metadata = {
  title: 'My Next App',
  description: 'แอพของฉัน',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className='w-[98%] mx-auto'>
        <NavBar></NavBar>
        </div>
        <main className="w-[98%] mx-auto mt-4">
          {children}
        </main>
      </body>
    </html>
  )
}

// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import NavBar from '@/component/NavBar'
import Contact from '@/component/Contact'

export const metadata = {
  title: 'Hirenz',
  description: 'Hirenz',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar></NavBar>
        <main>
          {children}
        </main>
        <Contact></Contact>
      </body>
    </html>
  )
}

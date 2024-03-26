'use client'
import '../assets/globals.css'
import { josephin } from '../utils/fonts'

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={`${josephin.className}  antialiased max-w-fit`}>
        {children}
      </body>
    </html>
  )
}

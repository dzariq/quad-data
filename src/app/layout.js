import { Roboto } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'Quad Data',
  description: 'Building AI Solutions for you',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script  src="https://cdn.botpress.cloud/webchat/v1/inject.js" ></Script >
      <Script  src="https://mediafiles.botpress.cloud/18d7fee7-273e-48d4-976a-69f90d7ac9c1/webchat/config.js" defer></Script >
      <body className={roboto.className}>{children}</body>
    </html>
  )
}

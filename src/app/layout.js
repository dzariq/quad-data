import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({weight:'400', subsets: ['latin'] })

export const metadata = {
  title: 'Quad Data',
  description: 'Building AI Solutions for you',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
<script src="https://mediafiles.botpress.cloud/18d7fee7-273e-48d4-976a-69f90d7ac9c1/webchat/config.js" defer></script>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}

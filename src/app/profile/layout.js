import '../profile.css'
import { Metadata } from "next"

export const metadata = {
    title: 'QDSB Profiles',
    description: 'profiles',
  }

export default function ProfileLayout({ children }) {
    return (
        <html lang="en">
            <body >
                <header>PROFILE HEADER</header>
                {children}
            </body>
        </html>
    )
}

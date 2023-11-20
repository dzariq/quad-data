"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"

  
export default function Profile() {
    const router = useRouter()
    return (
        <div>
            <h1>LISTS</h1>
            
            <ul>
                <Link href="/profile/1" >PROFILE 1</Link>
                <Link href="/profile/2" >PROFILE 2</Link>
                <Link prefetch={true} href={{
                    pathname : '/profile/3',
                    query : {
                        userName : "DD"
                    }
                }} >PROFILE 3</Link>
            </ul>
        </div>
    )
}
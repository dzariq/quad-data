"use client"
import { useParams } from "next/navigation"

export default function ProfileIdPost(){
    const params = useParams();
    return <div>PROFILE POST ID {params.id} {params.postId}</div> 
 }
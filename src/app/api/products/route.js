import { NextResponse } from "next/server"

export async function GET(){
    return NextResponse.json({
        products : [
            {
                id:1,
                name:"SOTOBI"
            }
        ]
    })
}

export async function POST(request){
    const data = await request.json();

    return NextResponse.json({data})
}
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const isLoggedIn = true

export function middleware(request){
    let cookie = new Headers(request.headers)
    // if(!isLoggedIn && request.url === 'http://localhost:3000/api/products'){
    //     return NextResponse.redirect(new URL('/',request.url))
    // }
    // return NextResponse.next()

    if(isLoggedIn){
        return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/',request.url))
}

export const config = {
    matcher : ['/profile']
}
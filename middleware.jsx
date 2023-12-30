"use server"
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import PocketBase from 'pocketbase';

export async function middleware(request) {
    const pb = new PocketBase('http://127.0.0.1:8090');

    if(pb.authStore.isValid){
        const pb_cookie = cookies().get("pb_auth")
        pb.authStore.loadFromCookie(`${pb_cookie.name}=${pb_cookie.value}`)
    }
    else{
        return NextResponse.redirect(new URL('/', request.url))
    }


    try {
        
    } catch (error) {
        
    }

}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/user/:path*',
}
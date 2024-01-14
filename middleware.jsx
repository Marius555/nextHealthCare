"use server"
import { NextResponse } from 'next/server'
import { cookies, headers } from 'next/headers'
import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');



export function middleware(request) {
    

    if (request.nextUrl.pathname.startsWith('/user/')) {
        try {
            const pb_cookie = cookies().get("pb_auth")
            pb.authStore.loadFromCookie(`${pb_cookie.name}=${pb_cookie.value}`)
            if(pb.authStore.isValid){
                return console.log("valid connection", true)
            }

        } catch (error) {
            return NextResponse.redirect(new URL('/', request.url))
        }
        
    }
    if(request.nextUrl.pathname.startsWith('/registration/')){
        try {
            const pb_cookie = cookies().get("pb_auth")
            pb.authStore.loadFromCookie(`${pb_cookie.name}=${pb_cookie.value}`)
            if(pb.authStore.isValid){
                return NextResponse.redirect(new URL('/', request.url)) 
            }
        } catch (error) {
            return
        }
    }
    if(request.nextUrl.pathname.startsWith('/login_user')){
        try {
            const pb_cookie = cookies().get("pb_auth")
            pb.authStore.loadFromCookie(`${pb_cookie.name}=${pb_cookie.value}`)
            if(pb.authStore.isValid){
                return NextResponse.redirect(new URL('/', request.url)) 
            }
            console.log(pb.authStore.isValid)
        } catch (error) {
            return
        }
    }
    

}
"use server"
const pb = new PocketBase('http://127.0.0.1:8090');
import PocketBase from 'pocketbase'
import { cookies } from 'next/headers'

export default async function GetValues(){
    try {
        const pb_cookie = cookies().get("pb_auth")
        pb.authStore.loadFromCookie(`${pb_cookie.name}=${pb_cookie.value}`)
        return true
    } catch (error) {
        return false
    }
}
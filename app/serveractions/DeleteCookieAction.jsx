"use server"
import { cookies } from 'next/headers'

const DeleteCookieAction = () => {
    try {
        cookies().delete('pb_auth')
        return true
    } catch (error) {
        return false
    }
}

export default DeleteCookieAction

"use server"
import LogInResolverSchema from "../resolver/UserLogInResolver"
import { redirect } from "next/navigation"
import { cookies } from 'next/headers'
import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');


async function verify(values) {
    try {
        await pb.collection('User').authWithPassword(
            values.email,
            values.password,
        );
        cookies().set({
            name: 'pb_auth',
            value: JSON.stringify(pb.authStore.storageFallback.pocketbase_auth),
            httpOnly: false,
            sameSite: false,
            secure: false,
            path: '/',
        })
        return true
    } catch (error) {
        return JSON.stringify(error)
    }
}

const LogInAction = async (values) => {

    const is_valid = await LogInResolverSchema.isValid(values)

    if (is_valid === true) {
        const check = await verify(values)
        if(check === true ){
            redirect("/")
            
        }
        else{
            return {error: check}
        }
    }
    else {
        return { error: "Shape Of Form Miss Match" }
    }
    

}

export default LogInAction

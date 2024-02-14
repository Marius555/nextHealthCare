"use server"
import DoctorRegisterSchema from '../resolver/DocotorRegisterResolver';
import PocketBase from 'pocketbase';
import { redirect } from 'next/navigation'

const pb = new PocketBase('http://127.0.0.1:8090');

async function verify(values){
    try {
        const data = {
            "username": Math.random() * Math.random(),
            "email": values.email,
            "emailVisibility": true,
            "password": values.password,
            "passwordConfirm": values.ConfirmPassword,
            "VartotojoTipas": values.VartotojoTipas,
            "ImonsKodas": Math.random() * Math.random(),
            "AgreeOnTerms": values.AgreeOnTerms,
        };
        
        await pb.collection('User').create(data);
        return true
    } catch (error) {
        return JSON.stringify(error)
    }
}

const RegisterPatientAction = async(values) => {
    
    const is_valid = await DoctorRegisterSchema.isValid(values)
    
    if(is_valid === true){
        const check = await verify(values)
        {check === true && redirect("/login_user")}
    }
    else{
        return {"msg": "Shape Of Form Miss Match"}
    }

  
}

export default RegisterPatientAction
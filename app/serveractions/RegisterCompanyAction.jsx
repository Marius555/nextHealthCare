"use server"
import PocketBase from 'pocketbase';
import CompanyRegistrationschema from '../resolver/CompanyRegisterResolver';
import { redirect } from 'next/navigation'

const pb = new PocketBase('http://127.0.0.1:8090');

async function verify(values){
    try {
        const data = {
            
            "username": Math.random() * Math.random(),
            "KontaktinioAsmensVardas": values.KontaktinioAsmensVardas,
            "email": values.ElektroninisPastas,
            "emailVisibility": true,
            "password": values.Slaptazodis,
            "passwordConfirm": values.PatvirtintiSlaptazodi,
            "ImonsPavadinimas": values.ImonėsPavadinimas,
            "ImonsKodas": values.ImonėsKodas,
            "KontaktinioAsmensPavarde": values.KontaktinioAsmensPavarde,
            "TelefonoNumberis": values.TelefonoNumberis,
            "VartotojoTipas": values.VartotojoTipas,
            "AgreeOnTerms": values.AgreeOnTerms,
        };
        await pb.collection('User').create(data);
        return true
    } catch (error) {
        return JSON.stringify(error)
    }
}


const RegisterCompanyAction = async(values) => {
    
    const is_valid = await CompanyRegistrationschema.isValid(values)
    
    if(is_valid === true){
        const check = await verify(values)
        {check === true && redirect("/")}
    }
    else{
        return {"msg": "Shape Of Form Miss Match"}
    }

  
}

export default RegisterCompanyAction

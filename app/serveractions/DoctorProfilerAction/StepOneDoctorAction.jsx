"use server"
import PocketBase from 'pocketbase';
import { cookies } from 'next/headers'
import dayjs from 'dayjs';
const pb = new PocketBase('http://127.0.0.1:8090');

const StepOneDoctorAction = async(values) => {
    const pb_cookie = cookies().get("pb_auth")
    pb.authStore.loadFromCookie(`${pb_cookie.name}=${pb_cookie.value}`)

    if(pb.authStore.isValid){
        try {
            const data = {
                "UserId": pb.authStore.model.id,
                "Name": values.Name,
                "LastName": values.LastName,
                "PhoneNumber": values.PhoneNumber,
                "LicenseNumber": values.LicenseNumber,
                "Nationality": values.Nationality,
                "BirthDay": dayjs(values.BirthDay).format("YYYY-MM-DD"),
                "Gender": values.Gender
            };
            await pb.collection('DoctorDetails').create(data);
        } catch (error) {
            return
        }
    }
}

export default StepOneDoctorAction

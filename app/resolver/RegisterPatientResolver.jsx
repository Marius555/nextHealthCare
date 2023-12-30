import * as yup from "yup"

const PatientRegisterSchema = yup
  .object({
    VartotojoTipas: yup.string().required("Vartotojo Tipas Butinas"),
    email: yup.string().email("Netinkamas El. Pastas").required("Elektroninio Pasto Adresas Butinas"),
    password: yup.string().required("Nenurodytas Slaptazodis"),
    ConfirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Slaptazodiai Privalo Sutapti'),
    AgreeOnTerms: yup.boolean().oneOf([true],'Must Be Checked To Sign Up'),
   
  })
  export default PatientRegisterSchema
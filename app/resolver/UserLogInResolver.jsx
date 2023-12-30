import * as yup from "yup"

const LogInResolverSchema = yup
  .object({
    email: yup.string().email("Netinkamas El. Pastas").required("Elektroninio Pasto Adresas Butinas"),
    password: yup.string().required("Nenurodytas Slaptazodis"),
   
  })
  export default LogInResolverSchema
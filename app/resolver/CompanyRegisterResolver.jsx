import * as yup from "yup"

const CompanyRegistrationschema = yup
  .object({
    VartotojoTipas: yup.string().required("Nerastas Vartotojo Tipas"),
    ImonėsPavadinimas: yup.string().required("Imones Pavadinimas Butinas"),
    ImonėsKodas: yup.string().required("Imones Kodas Butinas"),
    KontaktinioAsmensVardas: yup.string().required("Imones Kontaktinio Asmens Vardas Butina"),
    KontaktinioAsmensPavarde: yup.string().required("Imones Kontaktinio Asmens Pavarde Butina"),
    TelefonoNumberis: yup.string().required("Imones Telefono Numeris Butinas"),
    ElektroninisPastas: yup.string().email("Netinkamas El. Pastas").required("Imones Elektoninis Pastas Butinas"),
    Slaptazodis: yup.string().min(8).required("Slaptazodis Butinas"),
    PatvirtintiSlaptazodi: yup.string().oneOf([yup.ref('Slaptazodis'), null], 'Slaptazodiai Privalo Sutapti'),
    AgreeOnTerms: yup.boolean().oneOf([true],'Must Be Checked To Sign Up'),
  })
  export default CompanyRegistrationschema
import * as yup from "yup"
import parse from "date-fns/parse";
import dayjs from "dayjs"


const DoctorStepOneResolver = yup
  .object({
    Name: yup.string().required("Nerastas Vartotojo Tipas"),
    LastName: yup.string().required("Imones Pavadinimas Butinas"),
    PhoneNumber: yup.string().required("Imones Kodas Butinas"),
    LicenseNumber: yup.string().required("Imones Kontaktinio Asmens Vardas Butina"),
    Gender: yup.string().required("Lytis Butina"),
    Nationality: yup.string().required("Pamirsote Nurodyti Lyti"),
    DateOfBirth: yup.date().transform(function (value, originalValue) {
      if (this.isType(value)) {
        return value;
      }
      const result = parse(originalValue, "dd.MM.yyyy", new Date());
      return result;
    }).required("Birth Date Is Required")
  })
  export default DoctorStepOneResolver
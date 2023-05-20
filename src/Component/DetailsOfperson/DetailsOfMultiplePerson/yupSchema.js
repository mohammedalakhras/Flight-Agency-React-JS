import * as yup from 'yup'
export const SchemaForPersonDetails = yup.object().shape({
    name : yup.string().required("هذا الحق مطلوب"),
    passport : yup.string().required("هذا الحقل مطلوب"),
    bankAcount : yup.string().required("هذا الحفل مطلوب"),
    fatherName : yup.string().required("هذا الحقل مطلوب"),
    weight : yup.string().required("هذا الحقل مطلوب"),
})
import * as Yup from "yup";

const NAME_MAX_LENGTH = 25;
const SURNAME_MAX_LENGTH = 25;
const PHONE_MIN_LENGTH = 8;
const PHONE_MAX_LENGTH = 15;
const INQUIRY_MAX_LENGTH = 100;

export const validationSchema = Yup.object({
    name: Yup
        .string()
        .max(NAME_MAX_LENGTH, `El nombre no puede tener más de ${NAME_MAX_LENGTH} caracteres`)
        .required("El nombre es obligatorio"),
    surname: Yup
        .string()
        .max(SURNAME_MAX_LENGTH, `El apellido no puede tener más de ${SURNAME_MAX_LENGTH} caracteres`)
        .required("El apellido es obligatorio"),
    email: Yup
        .string()
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "El email debe ser un email válido" )
        .email("El email debe ser un email válido")
        .required("El email es obligatorio"),
    phone: Yup
        .string()
        .matches(/^(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/, "El teléfono solo puede contener números y los caracteres + - ()")
        .min(PHONE_MIN_LENGTH, `El teléfono debe tener al menos ${PHONE_MIN_LENGTH} caracteres`)
        .max(PHONE_MAX_LENGTH, `El teléfono no puede tener más de ${PHONE_MAX_LENGTH} caracteres`)
        .required("El teléfono es obligatorio"),
    inquiry: Yup
        .string()
        .max(INQUIRY_MAX_LENGTH, `La consulta no puede tener más de ${INQUIRY_MAX_LENGTH} caracteres`)
        .required("No olvides dejarnos tu consulta"),
});
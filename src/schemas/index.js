import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

export const basicSchema = yup.object().shape({
  email: yup.string().email("not a valid email").required("Reqierd"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { massage: "please make it stronger" })
    .required("Reqierd"),
});

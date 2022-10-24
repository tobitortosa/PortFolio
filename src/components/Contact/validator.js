// Corrobora si hay caracteres especiales entro del str.
export function hasSpecialChars(str) {
  const regexSpecialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return regexSpecialChars.test(str);
}

//Corrobora el email ingresado
export function isValidEmail(str) {
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  return regex.test(str);
}

export default function validate(input) {
  const error = {};

  if (!input.name) {
    error.name = "Name is required";
  }

  if (!input.email) {
    error.email = "Email is required";
  } else if (!isValidEmail(input.email)) {
    error.email = "Invalid Email";
  }

  return error;
}

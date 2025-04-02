import signUpUser from "./4-user-promise";
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName: firstName,
    lastName: lastName,
  });
}

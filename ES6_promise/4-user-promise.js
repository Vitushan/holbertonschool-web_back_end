export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName: firstName,
    lastNAme: lastName,
  });
}

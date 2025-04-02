import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, filename) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(filename);

  return Promise.allSettled([promise1, promise2]).then((results) =>
    results.map((result) => {
      const outcome = { status: result.status };
      if (result.status === 'fulfilled') {
        outcome.value = result.value;
      } else {
        outcome.value = result.reason;
      }
      return outcome;
    }),
    );
}

import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => {
    return results.map((result) => {
      const outcome = { status: result.status };
      if (result.status === 'fulfilled') {
        outcome.value = result.value;
      } else {
        outcome.value = result.reason;
      }
      return outcome;
    });
  });
}

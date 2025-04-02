import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(filename);
   const promise = [promise1, promise2];
    return Promise.allSettled(iterable).then(promise1, promise2);
}

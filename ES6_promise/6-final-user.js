import { signupUser } from './4-user-promise'
import { uploadPhoto } from './5-photo-reject'

export default function handleProfileSignup(firstName, lastName, fileName) {
  if (typeof firstName !== 'string') {
    throw new TypeError('firstName must be a string');
  }

  if (typeof lastName !== 'string') {
    throw new TypeError('lastName must be a string');
  }

  if (typeof fileName !== 'string') {
    throw new TypeError('fileName must be a string');
  }
  return Promise.allSettled([
    signupUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);
}

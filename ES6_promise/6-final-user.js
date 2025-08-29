import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const tasks = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  return Promise.allSettled(tasks).then((results) => results.map((r) => ({
    status: r.status,
    value: r.status === 'fulfilled' ? r.value : String(r.reason),
  })));
}

import { uploadPhoto, createUser } from './utils';

export default function handleProfilSignup() {
    Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
        console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
        console.log('Signup system offline');
    });
}

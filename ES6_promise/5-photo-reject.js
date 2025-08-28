export default function uploadPhoto(fileName) {
  if (typeof fileName !== 'string') {
    throw new TypeError('fileName must be a string');
  }
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}

//
// This is only a SKELETON file for the 'Promises' exercise. It's been provided as a
// convenience to get you started writing code faster.
//



export const promisify = func => (...args) => {
  return new Promise((resolve, reject) => {
    func(...args, (error, value) => {
      if (error) return reject(error);
      else return resolve(value)
    });
  })
};

export const all = () => {
  throw new Error('Remove this statement and implement this function');
};

export const allSettled = () => {
  throw new Error('Remove this statement and implement this function');
};

export const race = () => {
  throw new Error('Remove this statement and implement this function');
};

export const any = () => {
  throw new Error('Remove this statement and implement this function');
};

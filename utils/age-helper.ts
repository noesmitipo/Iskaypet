export const getAge = (birthdate: Date) => {
  return Math.floor((Date.now() - birthdate.getTime()) / 3.15576e10);
};

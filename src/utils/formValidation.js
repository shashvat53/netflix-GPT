export const checkValidation = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(
    password
  );

  if (!isEmailValid) return "*Email is not valid";
  if (!isPasswordValid) return "*Password is not valid";

  return null;
};

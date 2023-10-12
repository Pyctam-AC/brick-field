export const EMAIL_PATTERN = "[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\\.[a-z]{2,}";

export const validateEmail = (email) => {
  return String(email).toLowerCase().match(EMAIL_PATTERN);
};

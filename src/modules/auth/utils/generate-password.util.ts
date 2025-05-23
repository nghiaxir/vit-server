export const generatePassword = (length = 8) =>
  Math.random().toString(36).slice(-length);

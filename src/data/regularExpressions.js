export const strongestPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[\W_]).{8,}$/; // At least 8 characters, 1 number, 1 uppercase letter, 1 lowercase letter, and one symbol
export const strongPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[\d\w\W]{8,}$/; // At least 8 characters, 1 number, 1 uppercase letter and 1 lowercase letter.

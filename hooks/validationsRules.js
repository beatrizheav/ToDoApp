export const signUpValidationRules = [
  {
    check: (data) => !data.name || data.name.length < 2,
    message: "Enter a valid name.",
  },
  {
    check: (data) => !data.email || !/\S+@\S+\.\S+/.test(data.email),
    message: "Please enter a valid email address.",
  },
  {
    check: (data) => !data.password || data.password.length < 8,
    message: "The password must be at least 8 characters.",
  },
  {
    check: (data) => data.password !== data.confirmPassword,
    message: "The passwords must match.",
  },
  { check: (data) => !data.avatar, message: "All fields are required." },
];

export const signInValidationRules = [
  { check: (data) => !data.email, message: "Email is required." },
  { check: (data) => !data.password, message: "Password is required." },
];

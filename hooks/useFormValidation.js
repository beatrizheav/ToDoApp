import { signUpValidationRules } from "./validationsRules";
import { signInValidationRules } from "./validationsRules";

const useFormValidation = (data, screen) => {
  let validations;
  if (screen === "signUp") {
    validations = signUpValidationRules;
  } else {
    validations = signInValidationRules;
  }

  const validateForm = () => {
    const errors = validations
      .filter((rule) => rule.check(data))
      .map((rule) => rule.message);
    if (errors.length) {
      alert(errors.join("\n"));
      return false;
    }
    return true;
  };
  return validateForm;
};

export default useFormValidation;

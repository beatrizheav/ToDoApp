export const handleInputChange = (setStateFunction, field, value) => {
  setStateFunction((prevState) => ({
    ...prevState,
    [field]: value,
  }));
};

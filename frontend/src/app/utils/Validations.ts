const ValidateData = (
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
  terms: boolean
) => {
  if (!name) {
    return "Name is required";
  }
  if (!email) {
    return "Email is required";
  }
  if (!password) {
    return "Password is required";
  }
  if (!confirmPassword) {
    return "Confirm Password is required";
  }
  if (password !== confirmPassword) {
    return "Password and Confirm Password must be same";
  }
  if (!terms) {
    return "Please accept terms and conditions";
  }
  return "success";
};

export default ValidateData;

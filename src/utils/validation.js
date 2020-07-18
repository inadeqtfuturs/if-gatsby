export const requiredField = value =>
  value ? undefined : 'This field is required';
export const requiredNumber = value =>
  value !== undefined ? undefined : 'This field is required';

// zipcodes
export const zipCodeLength = value =>
  value.length === 5 ? undefined : 'Must be a valid US zip code';
export const zipCodeNumeric = value =>
  /^[0-9]{5}(?:-[0-9]{4})?$/.test(value)
    ? undefined
    : 'Zip codes must only contain numbers';

// phone numbers
export const phoneNumberNumeric = value =>
  /^[0-9-() ]+$/i.test(value)
    ? undefined
    : 'Phone numbers must only contain numbers and symbols';
export const phoneNumberLength = value => {
  const clean = `'' + ${value}`.replace(/\D/g, '');
  return clean.length === 10 || clean.length === 11
    ? undefined
    : 'Must be a valid phone number';
};

// numbers
export const float = value =>
  /^([-+]?[0-9]+\.[0-9])|([0-9])+$/.test(value)
    ? undefined
    : 'Must be a number';

// password
export const match = (newPassword, confirmPassword) =>
  newPassword !== confirmPassword ? undefined : `Password does not match`;
export const length = value => {
  if (value) {
    return value.length >= 8
      ? undefined
      : 'Password must be at least 8 characters long';
  }
  return undefined;
};

// compose
export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

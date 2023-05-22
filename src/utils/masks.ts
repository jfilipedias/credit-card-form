export function maskCreditCardNumber(number: string) {
  return number
    .replace(/\D/g, '')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4})(\d)/, '$1 $2')
}

export function maskCreditCardValidity(validity: string) {
  return validity
    .replace(/\D/g, '')
    .replace(/(0?[1-9]|1[0-2])([2-9]\d)/, '$1/$2')
}

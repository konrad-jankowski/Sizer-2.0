const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "PLN",
  style: "currency",
});

export function formatCurrencyUppercase(number) {
  return CURRENCY_FORMATTER.format(number).toUpperCase();
}
export function formatCurrencyLowercase(number) {
  return CURRENCY_FORMATTER.format(number).toLocaleLowerCase();
}

export const formatPrice = (value, currency = "GBP", locale = "en-GB") => {
  return Number(value).toLocaleString(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

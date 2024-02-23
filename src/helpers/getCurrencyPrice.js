export const getCurrencyPrice = (singleItem) => {
  return Number(singleItem.price).toLocaleString("es-AR", {
    style: "currency",
    currency: singleItem.currency_id,
  });
};

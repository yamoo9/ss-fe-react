/**@type{(n: number) => string} */
export function numberWithComma(n) {
  return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

/**@type{(price: number) => string} */
export function currency(price) {
  return `${numberWithComma(price)}원`;
}

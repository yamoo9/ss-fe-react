/**@type{(path:string) => string} */
export function getPublic(path) {
  return `${import.meta.env.BASE_URL}${path}`;
}

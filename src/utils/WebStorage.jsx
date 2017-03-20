/* LocalStorageコントローラ */

// SET
export const setLocal = item => {
  localStorage.setItem('TODO', JSON.stringify(item))
}
// GET
export const getLocal = () => {
  const results = JSON.parse(localStorage.getItem('TODO'))
  return results
}

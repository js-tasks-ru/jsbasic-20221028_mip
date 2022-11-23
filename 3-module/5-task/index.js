function getMinMax(str) {
  let arr = str
    .split(' ')
    .map(Number)
    .filter(item => isNaN(item) == false)
  return { min: Math.min(...arr), max: Math.max(...arr) }
}

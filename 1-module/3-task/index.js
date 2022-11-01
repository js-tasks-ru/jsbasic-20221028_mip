function ucFirst(str) {
  if (length.str === 1) {
    return str.toUpperCase
  }
  if (str === '') {
    return ''
  } else {
    return str[0].toUpperCase() + str.slice(1)
  }
}

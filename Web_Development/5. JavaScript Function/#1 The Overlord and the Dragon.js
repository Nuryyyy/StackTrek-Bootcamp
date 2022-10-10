function hero(bullets, dragons) {
  const x = bullets / 2
  let y = dragons
  if (x >= y) {
    return true
  }
  else {
    return false
  }

}
console.log(hero(7, 4))
export function cloneArrayAndPush(theArray, newItem) {
  var newArray = JSON.parse(JSON.stringify(theArray))
  newArray.push(newItem)
  return newArray
}
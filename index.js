// Grab the save-el paragraph and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
  count += 1
  countEl.textContent = count
}
// Create a function, save()
// which logs out the count when called
function save() {
  let countStr = count + " - "
  // Render the variable in the saveEl using innerText
  // Make sure not to delete existing content of paragraph
  saveEl.textContent += countStr
  // turns number to zero after saving
  countEl.textContent = 0
  console.log(count)
  // turns count to zero after saving - restart again
  count = 0
}

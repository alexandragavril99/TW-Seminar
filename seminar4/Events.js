function addNumbers(a, b) {
  console.log(a + b);
}

// function callAddNumbers() {
//     addNumbers(1,2)
// }

const addButton = document.getElementById("button1");
// addButton.addEventListener("click",function(){
//     return addNumbers(1,2);
// });

addButton.addEventListener("click", () => addNumbers(1, 2));

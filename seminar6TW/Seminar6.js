const mainDiv = document.getElementById("mainDiv");
console.log(mainDiv);

const elements = document.getElementsByClassName("outsideParagraph");
console.log(elements);
for (elem of elements) {
  console.log(elem);
}

const elemsByTag = document.getElementsByTagName("p");
console.log(elemsByTag);

const elemsByName = document.getElementsByName("testName");
for (elem of elemsByName) {
  console.log(elem);
}
console.log(elemsByName);

const fetchPromise = fetch("https://jsonplaceholder.typicode.com/albums");
fetchPromise
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));

async function fetchPromiseWithAsyncAwait() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const json = await response.json();
    return json;
  } catch (err) {
    console.log(err);
  }
}

fetchPromiseWithAsyncAwait().then((json) => console.log(json));

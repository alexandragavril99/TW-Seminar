//Promises//

var posts = [
  { title: "Post one", body: "This is post one" },
  { title: "Post two", body: "This is post two" },
];

function getPosts() {
  setTimeout(function () {
    posts.forEach((post) => console.log(post));
  }, 3000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      posts.push(post);
      const error = { status: false, message: "This is an error" };
      if (!error.status) resolve();
      else reject(error.message);
    }, 1000);
  });
}

createPost({ title: "Post three", body: "This is post three" })
  .then(getPosts)
  .catch((err) => console.log(err));

//Promises//

//Multiple promises//
const promise1 = new Promise((resolve, reject) => {
  resolve("Hello from promise 1!");
});

const promise2 = new Promise((resolve, reject) => {
  resolve("Hello from promise 2!");
});

Promise.all([promise1, promise2]).then((message) => console.log(message));
//Multiple promises //
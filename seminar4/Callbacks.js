var posts = [
  { title: "Post one", body: "This is post one" },
  { title: "Post two", body: "This is post two" },
];

function getPosts() {
  setTimeout(function () {
    posts.forEach((post) => console.log(post));
  }, 3000);
}

function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    console.log("Hello from createPost!");
    callback();
  }, 1000);
}

createPost({ title: "Post three", body: "This is post three" }, getPosts);

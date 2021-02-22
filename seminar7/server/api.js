import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

let posts = [];
for (let i = 1; i <= 20; i++) {
  posts.push({
    id: i,
    userId: i,
    title: `Title ${i}`,
    body: `Body ${i}`,
  });
}

var app = express(); //transformam aplicatia noastra intr-un server de express
var router = express.Router();

app.use(bodyParser.json()); //e un middleware care seteaza "content-type" -"application/json"
app.use(bodyParser.urlencoded({ extended: true })); //permite parsarea efectiva a informatiilor din url, extended-true: ne putem defini in url si obiecte,arrayuri
app.use(cors());

app.use("/api", router);

//Middleware
router.use((req, res, next) => {
  //res.setHeader("Content-Type", "application/json");
  console.log("Hello from middleware!");
  next();
});

router.route("/posts").get((req, res) => {
  console.log("Hello from get!");
  res.json(posts);
});

router.route("/posts").post((req, res) => {
  console.log("Hello from post!");
  const post = req.body;
  if (!post) {
    res.sendStatus(500);
    return;
  }

  posts.push(post);
  res.json(posts);
});

router.route("/posts/:id").put((req, res) => {
  console.log("Hello from put!");
  const postId = req.params.id;
  const newPost = req.body;
  if (!newPost) {
    res.sendStatus(500);
    return;
  }
  const newPosts = posts.map((post) => (post.id == postId ? newPost : post));
  res.json(newPosts);
});

router.route("/posts/:id").patch((req, res) => {
  console.log("Hello from patch!");
  const postId = req.params.id;
  const newPost = req.body;
  if (!newPost) {
    res.sendStatus(500);
    return;
  }

  // const newPosts = posts.map((post) =>
  //   post.id == postId
  //     ? Object.assign(post, {
  //         title: newPost.title,
  //         body: newPost.body,
  //       })
  //     : post
  // );

  const newPosts = posts.map((post) =>
    post.id == postId
      ? { ...post, title: newPost.title, body: newPost.body }
      : post
  );

  res.json(newPosts);
});

router.route("/posts/:id").delete(function (req, res) {
  console.log("Hello from delete!");
  const postId = req.params.id;
  const index = posts.findIndex((post) => post.id == postId);

  posts.splice(index, 1);
  res.json(posts);
});

var port = 8000;
app.listen(port, () => console.log(`The app is listening to ${port}`));

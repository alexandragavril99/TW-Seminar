const link = "http://localhost:8000/api/posts/";

async function getPosts() {
  const posts = (await axios.get(link)).data;
  console.log(posts);
}

async function createPost(post) {
  const response = (
    await axios.post(link, post, {
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).data;
  console.log(response);
}

async function callCreatePost() {
  try {
    await createPost({
      id: 21,
      userId: 21,
      title: `Title 21`,
      body: `Body 21`,
    });
  } catch (err) {
    console.log(err);
  }
}

async function updatePost(postId, post) {
  const response = (
    await axios.put(link + postId, post, {
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).data;
  console.log(response);
}

async function callUpdatePost() {
  try {
    await updatePost(5, {
      id: 5,
      userId: 5,
      title: `Title 5 put`,
      body: `Body 5 put`,
    });
  } catch (err) {
    console.log(err);
  }
}

async function deletePost(postId) {
  console.log((await axios.delete(link + postId)).data);
}

const link = "https://jsonplaceholder.typicode.com/posts/";

async function getPosts() {
  try {
    const posts = (await axios.get(link)).data;
    return posts;
  } catch (err) {
    console.log(err);
  }
}

async function createPost(post) {
  const response = (
    await axios.post(link, post, {
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).data;
  return response;
}

async function deletePost(postId) {
  const response = (await axios.delete(link + postId)).data;
  return response;
}

function renderTable(posts) {
  const existentTable = document.getElementById("renderTable");
  if (existentTable) {
    document.body.removeChild(existentTable);
  }
  var table = document.createElement("table");
  var tableHeader = document.createElement("thead");
  var tableBody = document.createElement("tbody");

  var headerRow = document.createElement("tr");
  for (prop in posts[0]) {
    var headerCell = document.createElement("th");
    headerCell.appendChild(document.createTextNode(prop));
    headerRow.appendChild(headerCell);
  }
  tableHeader.appendChild(headerRow);

  posts.forEach((post, index, self) => {
    var bodyRow = document.createElement("tr");
    for (prop in post) {
      var bodyCell = document.createElement("td");
      bodyCell.appendChild(document.createTextNode(post[prop]));
      bodyRow.appendChild(bodyCell);
    }
    var deleteButtonCell = document.createElement("td");
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => {
      callDeletePost(post.id);
      posts.splice(index, 1);
      renderTable(self);
    });
    deleteButtonCell.appendChild(deleteButton);
    bodyRow.appendChild(deleteButtonCell);

    tableBody.appendChild(bodyRow);
  });
  table.appendChild(tableHeader);
  table.appendChild(tableBody);
  table.id = "renderTable";
  //table.style.cssText = "border: 1px solid black; margin-top: 20px";
  document.body.appendChild(table);
}

function postForm(event) {
  event.preventDefault();
  const userId = document.getElementById("postUserId").value;
  const title = document.getElementById("postTitle").value;
  const body = document.getElementById("postBody").value;

  if (!userId || !title || !body || userId <= 0) {
    return;
  }

  callCreatePost({
    id: 101,
    userId: userId,
    title: title,
    body: body,
  });
}

function callGetPosts() {
  getPosts()
    .then((posts) => renderTable(posts))
    .catch((err) => console.log(err));
}

function callCreatePost(post) {
  createPost(post)
    .then((post) => {
      getPosts().then((posts) => {
        posts.push(post);
        renderTable(posts);
      });
    })
    .catch((err) => console.log(err));
}
function callDeletePost(postId) {
  deletePost(postId)
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err));
}

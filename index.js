//Fetch data using async/await

async function getPosts() {

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = await response.json();

  displayPosts(posts);
}

// Display Posts
function displayPosts(posts) {

  const postList = document.getElementById("post-list");

  for (let post of posts) {

    const li = document.createElement("li");

    const h1 = document.createElement("h1");

    h1.textContent = post.title;

    const p = document.createElement("p");

    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);

    postList.appendChild(li);
  }
}

//calling getPosts()

getPosts();

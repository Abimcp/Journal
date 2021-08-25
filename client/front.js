const postController = require("../controllers/post");

document.getElementById('publish').addEventListener('submit', createPost(e));

const publishPost = event => {
    event.preventDefault();
    const post = document.querySelector('.post').value;
    fetch('localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: post.title,
            name: post.pseudonym,
            message: post.body
        }),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error, 'Error posting entry'));
};



function createPost(data) {
    const postContainer = document.createElement('section');
    const title = document.createElement('h1');
    const pseudonym = document.createElement('h3');
    // const date = document.createElement('h3');
    const body = document.createElement('p')


    title.setAttribute('class', 'title');
    
    title.textContent = data.title;
    pseudonym.textContent = data.pseudonym;
    body.textContent = data.body;


    postContainer.appendChild(title);
    postContainer.appendChild(pseudonym);
    postContainer.appendChild(date)
    postContainer.appendChild(body);

    publishPost();
    return postContainer;
    
}



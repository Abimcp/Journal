

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


// async function publishPost(e){
//     e.preventDefault();
//     try {
//         const options = {
//             method: 'POST',
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(Object.fromposts(new FormData(e.target)))
//         }
        
//         const response = await fetch('http://localhost:3000/posts', options);
//         const { id, err } = await response.json();
//         if(err) { 
//             throw Error(err) 
//         } else {
//             window.location.hash = `#posts/${id}`
//         }
//     } catch (err) {
//         console.warn(err);
//     }

// static async publishPost(data) {
//     return new Promise (async(resolve,reject) => {
//         try{
//             console.log("I'm working!");
//             const {title, pseudonym, date, body} = data;
//             const result = await db.query(
//                 "INSERT INTO posts( title, date, pseudonym, body)  VALUES ($1, $3, $2, $4) "
//             )
//         } catch (err) {
//             reject('Book could not be created');
//         }
//     });

//     })

   
    
    ////save data to db

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



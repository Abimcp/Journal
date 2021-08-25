

document.getElementById('publish').addEventListener(click, publishPost());

static async publishPost(data) {
    return new Promise(async(resolve,reject) => {
        try{
            console.log("I'm working!");
            const {title, pseudonym, date, body} = data;
            const result = await db.query

    })
}
    
    ////save data to db

};




function createPost(data) {
    const postContainer = document.createElement('section');
    const title = document.createElement('h1');
    const pseudonym = document.createElement('h3');
    const date = document.createElement('h3');
    const body = document.createElement('p')


    title.setAttribute('class', 'title');
    
    title.textContent = data.;
    entries.style.outline = 'transparent';

    postContainer.appendChild(title);
    postContainer.appendChild(pseudonym);
    postContainer.appendChild(date)
    postContainer.appendChild(body);

    return postContainer;
}



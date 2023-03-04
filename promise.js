const posts = [
    {'title': 'Post 1', 'content': 'Deneme içerik 1'},
    {'title': 'Post 2', 'content': 'Deneme içerik 2'},
    {'title': 'Post 3', 'content': 'Deneme içerik 3'},
];

const listPosts = (data) => {
    return new Promise((resolve,reject) => {
        if(data) {
            posts.forEach(post => {
                console.log(`${post.title} --- ${post.content}`);
            });
            resolve('Listeleme Başarılı');  
        } 
        else reject('Listeleme Başarısız');
    })
}

const addPost = (post, data) => {
    return new Promise((resolve,reject) => {
        if (data) {
            posts.push(post);
            resolve('Ekleme Başarılı');
        }else {
            reject('Ekleme Başarısız');
        }
    })
}

listPosts(true)
    .then(result => {
        console.log(result);
        return addPost({'title':'Post 4', 'content':'Deneme içerik 4'},true);
    })
    .then(result => {
        console.log(result);
        return listPosts(true);
    })
    .catch(err => {
        console.log(err);
    });
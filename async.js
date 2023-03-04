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

const getPosts = async () => {
    try {
        let result = await listPosts(true);
        console.log(result);
        result = await addPost({'title':'Post 4', 'content':'Deneme içerik 4'}, true);
        console.log(result);
        console.log('Yeni Liste');
        await listPosts(true);
    } catch (err) {
        console.log(err);
    }
}

getPosts();
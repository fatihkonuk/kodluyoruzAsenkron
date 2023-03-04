const posts = [
    {'title': 'Post 1', 'content': 'Deneme içerik 1'},
    {'title': 'Post 2', 'content': 'Deneme içerik 2'},
    {'title': 'Post 3', 'content': 'Deneme içerik 3'},
];

const listPosts = () => {
    posts.forEach(post => {
        console.log(`${post.title} --- ${post.content}`);
    });
}

const addPost = (post, callback) => {
    posts.push(post);
    console.log('\nYeni Liste');
    callback();
}
listPosts();
addPost({'title':'Post 4', 'content':'Deneme içerik 4'}, listPosts);
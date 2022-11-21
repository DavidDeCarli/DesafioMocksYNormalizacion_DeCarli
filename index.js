const { normalize, schema } = require('normalizr');
const util = require('util');

const blogpost = {
    id: 1,
    title: "My blog post",
    description: "Short blogpost description",
    content: "Hello World",
    author: {
        id: 1,
        name: "David De Carli"
    },
    comments: [
        {
            id: 1,
            commenter: {
                id: 2,
                name: "Rodrigo Gonzalez"
            },
            content: "Muy buena clase profe."
        }
    ]
};

const userSchema = new schema.Entity('user');

const commentSchema = new schema.Entity('comment', {
    commenter: userSchema,
});

const postSchema = new schema.Entity('post', {
    author: userSchema,
    comments: [ commentSchema ]
});

const normalizedBlogpost = normalize(blogpost, postSchema);

console.log('Objeto Original => ', JSON.stringify(blogpost).length);
console.log('Objeto Normalizado => ', JSON.stringify(normalizedBlogpost).length);

console.log(util.inspect(normalizedBlogpost, false, 12, true));
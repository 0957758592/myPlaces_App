const user = {
    _id: "1",
    name: "Reed",
    email: "email@email.com",
    picture: "https://picsum.photos/id/237/200/300"
}

module.exports ={
    Query: {
        me: ()=> user
    }
}
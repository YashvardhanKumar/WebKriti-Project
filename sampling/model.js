const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Deyaku')
    .then(()=>{
    console.log('connection open!')
    })
    .catch(err => {
        console.log('error!')
        console.log(err)
    })
const accountDetailsSchema = new mongoose.Schema({
    userID: String,
    userName: {
        firstName: String,
        lastName: String
    },
    emailID: String,
    password: String,
    birthday: Date,
    created: {
        type: Boolean,
        default: false
    },
    isLoggedIn: {
        type: Boolean,
        default: false
    }
})
const postsSchema = new mongoose.Schema({
    userID: String,
    postedAt: {
        type: Date,
        default: Date.now()
    },
    image: {
        data: Buffer,
        contentType: String
    },
    caption: String,
})
const likesSchema = new mongoose.Schema({
    postID: String,
    likedByID: String,
    likedAt: {
        type: Date,
        default: Date.now()
    }
})
const commentsSchema = new mongoose.Schema({
    postID: String,
    commentedByID: String,
    commentedAt: {
        type: Date,
        default: Date.now()
    }
})
const commentRepliesSchema = new mongoose.Schema({
    commentID: String,
    reply: String,
    replyAt: {
        type: Date,
        default: Date.now()
    },
    repliedToId: String
})
const commentLikesSchema = new mongoose.Schema({
    commentID: String,
    commentLikedByID: String
})
const DMsSchema = new mongoose.Schema({
    receiverID: String,
    senderID: String,
    messageSent: String,
    messageReceived: String
})
const groupsSchema = new mongoose.Schema({
    groupName: String,
    members: {
        groupMemberID: String,
        message: String,
        isAdmin: Boolean
    }
})
const AccountDetails = new mongoose.model('AccountDetails',accountDetailsSchema)
const Posts = new mongoose.model('Posts',postsSchema)
const Likes = new mongoose.model('Likes',likesSchema)
const Comments = new mongoose.model('Comments',commentsSchema)
const CommentReplies = new mongoose.model('CommentReplies',commentRepliesSchema)
const CommentLikes = new mongoose.model('CommentLikes',commentLikesSchema)
const DMs = new mongoose.model('DMs',DMsSchema)
const Groups = new mongoose.model('Groups',groupsSchema)

// const person = new AccountDetails({
//     userID: String,
//     userName: {
//         firstName: String,
//         lastName: String
//     },
//     emailID: String,
//     password: String,
//     birthday: Date,
//     created: {
//         type: Boolean,
//         default: false
//     },
//     isLoggedIn: {
//         type: Boolean,
//         default: false
//     }
// })

// module.exports = {AccountDetails, Posts, Likes, Comments, CommentReplies, CommentLikes, DMs, Groups}
// const Amadeus = new Movie({title: 'Amadeus', year: 2010, score: 9.2, rating: 'R'})
// Movie.insertMany([
//     {title: 'Amadeus', year: 2010, score: 9.2, rating: 'R'},
//     {title: 'hjh', year: 2011, score: 9.0, rating: 'K'}
// ]).then(data => {
//     console.log("It worked!");
//     console.log(data);   //Insert data
// })
// const movieFind = Movie.find({rating: 'R'}).then(data => console.log(data))  // Find data
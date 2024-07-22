const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/letschat');
}

let allChats = [
    {
        from: "rahul",
        to: "ravinder",
        msg: "I am not feeling well",
        created_at: new Date(),
    },
    {
        from: "shashank",
        to: "suraj",
        msg: "I like coding",
        created_at: new Date(),
    },
    {
        from: "kumod",
        to: "adarsh",
        msg: "How are you dude?",
        created_at: new Date(),
    },
    {
        from: "mohan",
        to: "sohan",
        msg: "Lets go to goa",
        created_at: new Date(),
    },
    {
        from: "ram",
        to: "Shayan",
        msg: "I am your friend",
        created_at: new Date(),
    },
    {
        from: "riya",
        to: "ravi",
        msg: "I am your best friend",
        created_at: new Date(),
    },
    {
        from: "tony",
        to: "peter",
        msg: "bring me some fruits",
        created_at: new Date(),
    },
   
];

Chat.insertMany(allChats);
   

const express = require("express");
const path = require('path')
const cors = require("cors");

const app = express();

const port = process.env.PORT || 5000;

var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: 'c04bc76715c641538fb717a869573747',
  captureUncaught: true,
  captureUnhandledRejections: true
});

app.use('/js', express.static(path.join(__dirname, 'client/main.js')))

app.use(cors());
app.use(express.static('client'))
app.use(express.json());

const listCtrl = require("./controller")

const {
    getCompliment,
    getFortune,
    getAnswer
} = listCtrl

//  app.get('/main.js', (req,res) => {
//     res.sendFile(path.join(__dirname, './client/main.js'))
//  })



app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.get('/api/answer', getAnswer);

let quests = [
    {
        id: 0,
        mainQuest: 'Will I be a millionaire?', 
        mainExpect: ['Yay!']
    }, 
    {
        id: 1, 
        mainQuest: 'Does my future hold anything big?', 
        mainExpect: ['Yay!']
    },
    {
        id: 2, 
        mainQuest: 'Will the Magic 8 Ball end up in the trash if it does not give me the answer I want?', 
        mainExpect: ['Yay!']
    },
]

app.get('/api/quests', (req, res) => {
    res.status(200).send(quests)
})

let id = 3

app.post('/api/quest', (req, res) => {
    let newQuest = {...req.body, id}
    newQuest.mainExpect = newQuest.mainExpect.slice(0, 1)
    quests.unshift(newQuest)
    res.status(200).send(quests)
    id++
    rollbar.log('user created a question');
})

app.delete('/api/quest', (req, res) => {
if (quests[0].id>1){
    quests.shift()}
    res.status(200).send(quests)
    rollbar.log('user deleted a question');
})



app.listen(port, () => console.log(`Server running on ${port}`));



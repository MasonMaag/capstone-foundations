const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

const {
     getCompliment,
     getFortune,
     getAnswer,
 } = require('./controller')


app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.get('/api/answer', getAnswer);

let quests = [
    {
        id: 0,
        mainQuest: 'Am I a coding master?', 
        mainExpect: ['Yay!']
    }, 
    {
        id: 1, 
        mainQuest: 'Will I ever be a millionaire?', 
        mainExpect: ['Yay!', ]
    },
    {
        id: 2, 
        mainQuest: 'Is the 8 ball always right?', 
        mainExpect: ['Yay!', ]
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
})

app.delete('/api/quest', (req, res) => {
if (quests[0].id>1){
    quests.shift()}

    res.status(200).send(quests)
})


app.listen(4010, () => console.log("Server running on 4010"));



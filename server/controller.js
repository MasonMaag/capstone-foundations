const getCompliment =(req, res) => {
    const compliments = ["You're amazing!", "Your mind is a beautiful thing!", "You are making a difference!", "You deserve a hug right now!", "You're a great example to others!", "Actions speak louder than words, and yours tell an incredible story!", "You're a great listener!", "Everything would be better if more people were like you!", "You inspire me!","You light up the room!","You have the best laugh!","You inspire me!","I love how passionate you are!","You make the world a better place by being in it!","You're an incredible friend!","You are so smart!","You are truly making a difference!"];
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];
    res.status(200).send(randomCompliment);
}



const getFortune = (req, res) => {
    const fortunes = ["A beautiful, smart, and loving person will be coming into your life.","A dubious friend may be an enemy in camouflage.", "A faithful friend is a strong defense.", "A fresh start will put you on your way.", "A friend asks only for your time not your money.", "A friend is a present you give yourself.","Know where you're going.","Take action!","Be consistent.","Successes are built on failures.","Success can be exponential.","Good friends are better than lots of friends.","Believe in yourself!","Don't be afraid to experiment.","Do the truly inportant things first."];
     let randomIndex = Math.floor(Math.random() * fortunes.length);
     let randomfortunes = fortunes[randomIndex]; 
        res.status(200).send(randomfortunes);
    }

const getAnswer = (req,res) => {
        const answers = ['It is certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes, definetely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.','Yay!','Signs point to yes.','Reply hazy try again.','Ask again later.','Connot predict now.','Concentrate and ask again.','Nay!',"Don't cont on it.",'My reply is no.','My sources say no.','Outlook not so good.','Very doubtful.','Sorry, I was playing Billards. What was the question?', 'Probably.','Maybe.'];

        let randomIndex = Math.floor(Math.random() * answers.length);
        let randomAnswer = answers[randomIndex];
            res.status(200).send(randomAnswer);
    }   

module.exports = {
getCompliment,
getFortune,
getAnswer
}
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const getAllBtn = document.querySelector('#all')
const createForm = document.querySelector('#create-quest')
const newQuest = document.querySelector('#new-quest')
const newExpect = document.querySelector('#new-expect')
const questContainer = document.querySelector('section')
const deleteBtn = document.querySelector('#delete-btn')


const baseURL = `http://localhost:4010/api`

//Get compliment alert
  const getCompliment = () => {
    axios.get(baseURL + "/compliment/")
        .then(res => {
            const data = res.data;
            alert("Magic 8 ball says : " + data);
    });
};

//Get fortune alert
  const getFortune = () => {
    axios.get(baseURL + "/fortune/")
        .then(res => {
            const data = res.data;
            alert( "Magic 8 ball says : " + data);
    });
};

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click',getFortune)

//Create a question
  function createQuest(newQuest) {
    const questSheet = document.createElement('div')
    questSheet.classList.add('quest-sheet')

    questSheet.innerHTML = `
    <div id="newqueststyle">
    <h3>${newQuest.mainQuest} </h3>
    <h4>Expected:</h4>
    <li>${newQuest.mainExpect[0]}</li>
    <h4>Ask the 8 ball:</h4>
    <button onclick="getAnswer()">Ask!</button>
    </div>`;
  
    questContainer.appendChild(questSheet)
  }
  
  function clearQuest() {
    questContainer.innerHTML = ``
  }
  
//Get all questions
  const getAllquestions =() => {
   clearQuest()
  
   axios.get(baseURL + '/quests')
   .then((res) => { 
     for(let i = 0; i<res.data.length ; i++){
        createQuest(res.data[i]);
     } 
   })
   .catch(error => console.log(error))
  }
  
  getAllBtn.addEventListener('click',getAllquestions)
  
//Create new questions
  const createNewQuest = (event) => {
    const reqBody = {
      mainQuest: newQuest.value,
      mainExpect: newExpect.value.split(',') 
    }
    event.preventDefault();
    console.log(reqBody)
    clearQuest()
    axios.post(baseURL + '/quest', reqBody)
    .then((res) => {
      for(let i = 0; i <res.data.length; i++) {
        createQuest(res.data[i])
      }
      newQuest.value = '';
      newExpect.value ='';
    })
    .catch(error => console.log(error))
  
  }
  
  createForm.addEventListener('submit',createNewQuest)
 
//Delete last question
  const deleteQuest =(event) => {
    event.preventDefault();
    clearQuest()
    axios.delete(baseURL + '/quest')
    .then((res) => { 
      for(let i = 0; i<res.data.length ; i++){
         createQuest(res.data[i]);
      } 
    })
    .catch(error => console.log(error))
  }
  
  deleteBtn.addEventListener('click',deleteQuest)

//8 ball question alert  
const ballBtnIn = document.getElementById('wiseBtn')

const getAnswer = () => {
    axios.get(baseURL + "/answer/")
    .then(res => {
        const data = res.data;
        alert("Magic 8 ball says : " + data);
    })
    .catch(error => console.log(error))
};

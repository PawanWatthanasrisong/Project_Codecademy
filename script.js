//function for random the number
const generateRandomNumber  = () => {
    let randomNumber = Math.floor(Math.random()*3);
    return randomNumber;
}

//array of message
const fortuneMessage = {
    carreer: ['Doctor','Engineer','Professor'],
    adjective: ['sacrified','systematic','kind'],
    detail: ['help people.','create the innovation.', 'teach younger generations.']
}

let indexNumber = generateRandomNumber();

console.log('This is your future');
console.log(`In the very near future, you will be ${fortuneMessage.carreer[indexNumber]}.`);
console.log(`You are so ${fortuneMessage.adjective[indexNumber]} and your duty is to ${fortuneMessage.detail[indexNumber]}`);

const Logic = () => {

    const sciencedb = [
        {
            question : "At which temperature do the reading of the centigrade and the fahrenheit scales coincide",
            a : "0 degree",
            b : "-40 degree",
            c : "100 degree ",
            d : "-80 degree",
            ans : "ans3"
        },
        {
            question : "Sound travels fastest in ? ",
            a : "water",
            b : "steel",
            c : "alcohol",
            d : "air",
            ans : "ans4"
        },
        {
            question : "Which of the following is used jin the manufacturing of candel?",
            a : "Bees wax",
            b : "Spermaceti wax",
            c : "Lanodin wax ",
            d : "Paraffin wax",
            ans : "ans4"
        },
        {
            question : "DNA differs from RNA in having ?",
            a : "Uracli",
            b : "Adenine",
            c : "Thymine",
            d : "Cytosine",
            ans : "ans1"
        },
        {
            question : "Trachoma is disease of the? ",
            a : "Skin",
            b : "Eyes",
            c : "Lungs",
            d : "Ear",
            ans : "ans2"
        },
        {
            question : "What is the name of the longest bone of thigh? ",
            a : "Vistula",
            b : "Femur",
            c : "Fibula",
            d : "Humerous",
            ans : "ans2"
        },
        {
            question : "Brass gets discoloured in air because of the presence of which of the following gasses in air? ",
            a : "Oxygen",
            b : "Carbon dioxide",
            c : "Hydrogen Sulphide",
            d : "Nitrogen",
            ans : "ans3"
        },
        {
            question : "Blood Pressure in humans is measured using? ",
            a : "Sphygmomanometer",
            b : "Thermometer",
            c : "Anemometer",
            d : "Anapesticmeter",
            ans : "ans1"
        },
        {
            question : "Whis of the following is used in pencils? ",
            a : "Graphite",
            b : "Silicon",
            c : "Charcoal",
            d : "Phosphorous",
            ans : "ans1"
        },
        {
            question : "How many chambers are present in human heart? ",
            a : "1",
            b : "2",
            c : "3",
            d : "4",
            ans : "ans4"
        },
        

    ];

    const question = document.querySelector('.question');
    const option1 = document.querySelector("#option1");
    const option2 = document.querySelector("#option2");
    const option3 = document.querySelector("#option3");
    const option4 = document.querySelector("#option4");
    const submit = document.querySelector("#submit");
    const answers = document.querySelectorAll(".answer");
    //const showScore = document.querySelector('#showScore');
    
    let questionCount = 0
    let score = 0

    const loadQuestion = () =>{
        const questionList = sciencedb[questionCount];
        question.innerText = questionList.question;
        option1.innerText = questionList.a;
        option2.innerText = questionList.b;
        option3.innerText = questionList.c;
        option4.innerText = questionList.d;
    }
    
    loadQuestion();

    const getCheckedAnswer = () =>{
        let answer;
        answers.forEach((curAnsEle)=>{
            if(curAnsEle.checked){
                answer = curAnsEle.id;
            }
            // console.log(answer)
            
            
        });
        return answer
    }

    submit.addEventListener('click', () =>{
        const checkedAnswer = getCheckedAnswer();
        console.log(checkedAnswer)

        if(checkedAnswer === sciencedb[questionCount].ans){
            score++;
        };
        questionCount++;
        if(questionCount < sciencedb.length){
            loadQuestion()
        }else{
            alert("Your Score is "+ score + " out of " + sciencedb.length)
        }
        
    });


}

export default Logic
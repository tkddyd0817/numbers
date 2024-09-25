

//난수 생성함수



//게임 시작함수
function startGame(){
    const rand_0_1000 =Math.floor(Math.random() * 8999) + 1000;
    document.getElementById("open").textContent = rand_0_1000;

    setTimeout(function(){
        document.getElementById('open').style.visibility = "hidden";
    },3000)
    }



//제출 버튼 클릭시 실행되는 함수
function checKNumber(){
    const userInput = document.getElementById('user-input').value;
    const currentAnswer = document.getElementById('open').textContent;

    if (userInput === currentAnswer){
        alert(" 正解です!!")
    } else {
        alert("間違っていますㅜㅜ")
    }

}
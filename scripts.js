let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let copyDiv = document.querySelector(".copyCode");

let rgb1 = "rgb(92, 145, 229)";
let rgb2 = "rgb(152, 63, 198)";

const hexValue = () =>{
    let hexNumber = "0123456789abcdef";
    // loop will run only 6 times as we only want to get 6 digit numbers
    let colors = "#";

    for(let i=0;i<6;i++){ 
        colors += hexNumber[Math.floor(Math.random() * 16)];
    }

    return colors;
};

const handleBtn1 = () =>{
    rgb1 = hexValue();
    console.log(rgb1);
    btn1.innerText = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML = `background-image : linear-gradient(to right,  ${rgb1}, ${rgb2})`;

};

const handleBtn2 = () =>{
    rgb2 = hexValue();
    console.log(rgb2);
    btn2.innerText = rgb2;
    document.body.style.backgroundImage = 
        `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML = `background-image : linear-gradient(to right, ${rgb1}, ${rgb2})`;

};

btn1.addEventListener('click', handleBtn1);
btn2.addEventListener('click', handleBtn2);

copyDiv.addEventListener('click', () => {
    navigator.clipboard.writeText(copyDiv.innerText);
    showCopiedMessage();
});

function showCopiedMessage() {
    let messageBox = document.createElement('div');
    messageBox.textContent = 'Background code copied!';
    messageBox.style.position = 'fixed';
    messageBox.style.top = '10px';
    messageBox.style.left = '50%';
    messageBox.style.transform = 'translateX(-50%)';
    messageBox.style.backgroundColor = '#333';
    messageBox.style.color = '#fff';
    messageBox.style.padding = '10px 20px';
    messageBox.style.borderRadius = '5px';
    messageBox.style.zIndex = '9999';
    document.body.appendChild(messageBox);

    setTimeout(() => {
        messageBox.remove();
    }, 5000);
}

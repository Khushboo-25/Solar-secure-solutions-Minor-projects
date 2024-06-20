let num = Math.floor(document.getElementById("num").innerHTML);

document.getElementById("Increament").onclick = () => {
    num++;
    document.getElementById("num").innerHTML = num.toString();
};

document.getElementById("Decreament").onclick = () => {
    num--;
    document.getElementById("num").innerHTML = num.toString();
};

document.getElementById("Neutral").onclick = () => {
    num = 0;
    document.getElementById("num").innerHTML = num.toString();
};

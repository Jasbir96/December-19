const socket = io.connect('http://localhost:3000');
const d = document;
const inputBox = d.getElementById("inputBox");
const sendBtn = d.getElementById("sendBtn");
const chatList = d.querySelector(".chat-list");

sendBtn.addEventListener("click", function () {

    const text = inputBox.value;
    if (text === "")
        return;
    const li = d.createElement("li");
    li.style.listStyle = "none";
    li.textContent = `You : ${text}`;
    // my screen => message
    chatList.appendChild(li);

    inputBox.value = "";

    const message = `Steve: ${text}`;

    // send message whatsappp server
    socket.emit("message",message);
})






socket.on("broadcast",function(message){
    const li = d.createElement("li");
    li.style.listStyle = "none";
    li.textContent = message
    chatList.appendChild(li);
})
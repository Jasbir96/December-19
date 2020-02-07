const input = document.querySelector("input");
const ul = document.querySelector("ul");
const button = document.querySelector("button");
// const value=input.value;
// currentTarget => eventListener
button.addEventListener("click", function (e) {
    //    const button= e.currentTarget;
    const task = input.value;
    const li = document.createElement("li");
    li.setAttribute("class", "task");
    li.innerHTML = `   <p class="mr-4">
${task}
</p class="">
<img src="cross.png" alt="">`

ul.appendChild(li);
input.value="";
}
)




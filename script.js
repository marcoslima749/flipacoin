const flipBtn = document.getElementById("flip-btn");
const result = document.getElementById("result");
const body = document.getElementsByTagName("body")[0];

const flip = () => {
    result.classList.toggle("rotate");
    setTimeout(() => {
        result.textContent = Math.random() >= 0.5 ? "CARA" : "SECA";
    }, 400);
}

flipBtn.addEventListener("click", flip);
body.addEventListener("keypress", (event)=>{
    console.log(event.code)
    if(event.code === "Enter" || event.code === "NumpadEnter") {
        flip();
    }
})
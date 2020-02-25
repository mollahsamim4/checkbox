const inputs=document.querySelectorAll(`.controls .control_area input`);
const selectArea=document.querySelectorAll(`.controls select`);

function inputHandle(){
 const suffix=this.dataset.sizing || '';
document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}

inputs.forEach(input=>input.addEventListener("change",inputHandle));

//For Select Column
selectArea.forEach(input=>input.addEventListener("change",inputHandle));



const checkbox=document.querySelectorAll(".inbox .item input[type='checkbox']");
let lastChecked;
let inBetween=false;

function handleCheck(e){
	if(e.ctrlKey && this.checked){
		checkbox.forEach(checkedItem=>{
			if(checkedItem==this || checkedItem==lastChecked){
				inBetween=!inBetween;
			}
			if(inBetween){
				checkedItem.checked=true;
			}
		})
	}
	lastChecked=this;
}


checkbox.forEach(checItem=>checItem.addEventListener("click",handleCheck));


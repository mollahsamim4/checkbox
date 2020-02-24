const hour_hand=document.querySelector(".hour_hand");
const min_hand=document.querySelector(".min_hand");
const second_hand=document.querySelector(".second_hand");

function setDate(){
	const date=new Date();
	//For Seconds Hand
	const seconds=date.getSeconds();
	const secondDegree=((seconds/60)*360)+90;
	second_hand.style.transform=`rotate(${secondDegree}deg)`;

	//For Minute Hand
	const minutes=date.getMinutes();
	const minuteDegree=((minutes/12)*360)+90;
	min_hand.style.transform=`rotate(${minuteDegree}deg)`;

	//For Hour Hand
	const hour=date.getMinutes();
	const hourdegree=((minutes / 12) * 360 ) + 90;
	let hourHands=hour_hand.style.transform=`rotate(${hourdegree}deg)`;


	
}

setInterval(setDate,1000);
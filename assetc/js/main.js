const url=`https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json`;

const cities = [];

fetch(url)
.then(blob=>blob.json())
.then(data=>cities.push(...data));

function searchdata(data,cities){
	return cities.filter(filterdata=>{
		const regex=new RegExp(data,`gi`);
		return filterdata.city.match(regex,cities) || filterdata.state.match(regex,cities);

	})
}
function numberchagnewithcommase(x){
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
}

function displaySearchData(){
	const dataMap=searchdata(this.value,cities);
	const html=dataMap.map(place=>{
		const replace=new RegExp(this.value,'gi');
		const name=`<span>${place.city.replace(replace,`<span class="h1"> ${place.city}</span>`)}  ${place.state} </span>`;
		const population=`<span>${numberchagnewithcommase(place.population)}</span>`;
		return `
	
		<li>${name}  ${population} </li>
		`;

	}).join("");
	suggestion.innerHTML=html;
	console.log(typeof html);
}


const querysearch=document.querySelector(`.querysearch`);
const suggestion=document.querySelector(`.suggestion`);
querysearch.addEventListener("change",displaySearchData);
querysearch.addEventListener("keyup",displaySearchData);



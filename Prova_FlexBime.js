//var ourHeadline = document.getElementById("our-headline");
//var listItems = document.getElementById("our-list").getElementsByTagName("li");
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://localhost:8888/C:/Users/Federico/Desktop/Prova_Flexbimec.json');
ourRequest.onload = function() {
	var ourData = ourRequest.responseText;
	console.log(ourData[0]);
};
ourRequest.send();
/*function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo(){
var i = 0;
while (true) {
	console.log('Prova' + i);
	i++;
	await sleep(1000);
}
}
demo();
*/
//for (i = 0; i <listItems.length; i++){
  //  listItems[i].addEventListener("click", activateItem);
//}

//function activateItem(){
	//ourHeadline.innerHTML = this.innerHTML;
//}

DA FARE:

	• probabilmente non si può fare l'equivalente di XMLHttpRequest in locale
	• si può provare a lavorare non in locale oppure cercare un metodo simile, da valutare domattina presto.

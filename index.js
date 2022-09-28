
fetch('https://swapi.dev/api/people').then((data)=>{
  console.log(data)
  return data.json()
}).then((completeData)=>{
  
const inputClass = document.querySelectorAll(".input")
const writeUp = document.querySelectorAll(".writeup")
inputClass.forEach((char, index) => {
char.addEventListener("click", (event) =>{
    event.preventDefault()
    writeUp[index].innerHTML = `<p>Name: ${completeData.results[index].name}</p>
<p>Gender: ${completeData.results[index].gender}</p>
<p>Height: ${completeData.results[index].height}</p>`
writeUp[index].classList.toggle("hide")
})
})
 
//incase we encounter any error
}).catch((err)=>{ 
console.log(err);
})

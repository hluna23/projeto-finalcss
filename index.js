const form = document.querySelector('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex =   /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const tlf = /^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/


form.addEventListener('submit',(event) => {
  event.preventDefault();
  nameValidade();
   telefoneValidade(); 
   emailValidade();
})

function setError(index)  {
  campos[index].style.border = '2px solid #e63636';
  spans[index].style.display = 'block';
}

function removeError(index){
  campos[index].style.border = '';
  spans[index].style.display = 'none';
}


function nameValidade(){
  if(campos[0].value.trim().length === '')
  {
    setError(0);
  }
  else{
    removeError(0)
  }
}


function telefoneValidade(){
  if(!tlf.test(campos[1].value))
  {
    setError(1);
  }
  else
  {
    removeError(1);
  }
}
function emailValidade(){
  if(!emailRegex.test(campos[2].value))
  {
    setError(2);
  }
  else
  {
    removeError(2);
  }
}






let url = 'https://api.github.com/users/hluna23/repos';

fetch(url)
.then((response) => response.json())
.then((data) => {
  console.log(data);
}).catch((error) => {
  console.error(error);
})


let repos1 = document.querySelector("#Repos1")
let repos2 = document.querySelector("#Repos2")
let repos3 = document.querySelector("#Repos3")
let repos4 = document.querySelector("#Repos4")
let repos5 = document.querySelector("#Repos5")



const repos = document.getElementById("repos");
repos.addEventListener('blur', (e) =>{ 
  e.preventDefault
  fetch(`https://api.github.com/users/hluna23/repos`)
  .then((response) =>{
    response.json().then(data => {
      console.log(data);
      repos1.innerHTML = data[0].name;
      repos2.innerHTML = data[1].name;
      repos3.innerHTML = data[2].name;
      repos4.innerHTML = data[3].name;
      repos5.innerHTML = data[4].name;
      
      
  })
  })
  
      
  })
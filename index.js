
const btn=document.getElementById('btn');
const lists=document.getElementById('list');

btn.addEventListener("click",()=>{

    const into =document.getElementById('in');
    
    const e=into.value.trim();

    const div=document.createElement('div');
    div.innerHTML=`
    <ul>
    <li class="item">${e}</li>
    </ul>

    
    `
    lists.appendChild(div);
    into.value="";

})
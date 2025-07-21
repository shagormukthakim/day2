
const btn=document.getElementById('btn');
const lists=document.getElementById('list');

btn.addEventListener("click",()=>{

    const into =document.getElementById('in');
    
    const e=into.value.trim();

    const div=document.createElement('div');
    div.innerHTML=`
    <ul class="ul">
    <li class="item">${e}</li>
    <button class="b" onClick="deletes(div)">Done</button>
    </ul>

    
    `;
     const doneBtn = div.querySelector(".b");
    doneBtn.addEventListener("click", () => {
        lists.removeChild(div);
    });
    
    lists.appendChild(div);
    into.value="";

})

// function deletes(e){
//     const lists=document.getElementById('list');
//     lists.removeChild(e);


// }

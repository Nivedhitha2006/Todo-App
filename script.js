const addBtn=document.getElementById('addBtn');
const taskInput=document.getElementById('taskInput');
const taskTime=document.getElementById('taskTime');
const taskList=document.getElementById('taskList');

addBtn.addEventListener('click',addTask);

function addTask(){
 let text=taskInput.value.trim();
 let time=taskTime.value;

 if(text===''){alert('Enter task');return;}

 let li=document.createElement('li');
 li.className='task';

 let content=document.createElement('span');
 content.textContent=text + (time? " ("+time+")":"");

 let btns=document.createElement('div');
 btns.className='buttons';

 let edit=document.createElement('button');
 edit.textContent='Edit';
 edit.className='edit';
 edit.onclick=()=>editTask(li,content);

 let del=document.createElement('button');
 del.textContent='X';
 del.className='delete';
 del.onclick=()=>li.remove();

 btns.appendChild(edit);
 btns.appendChild(del);

 li.appendChild(content);
 li.appendChild(btns);
 taskList.appendChild(li);

 taskInput.value='';
 taskTime.value='';
}

function editTask(li,content){
 let old=content.textContent;

 let input=document.createElement('input');
 input.value=old;
 input.style.width="60%";

 let save=document.createElement('button');
 save.textContent='Save';
 save.className='save';

 content.replaceWith(input);

 save.onclick=()=>{
    content.textContent=input.value;
    input.replaceWith(content);
    save.remove();
 };

 li.querySelector('.buttons').appendChild(save);
}

del.onclick = () => {
    li.style.transition = "0.4s";
    li.style.opacity = "0";
    li.style.transform = "translateX(25px)";
    setTimeout(() => li.remove(), 400);
};

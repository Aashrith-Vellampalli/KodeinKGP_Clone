tt=document.getElementById("tt");
aimt= document.getElementById("aimt");
bt=document.getElementById("bt");
et=document.getElementById("et");
dmt=document.getElementById("dmt");


const button_items = document.querySelectorAll(".tbuttons");

button_items.forEach(button_item =>{
  button_item.addEventListener('click',() => {
    document.querySelector('.active')?.classList.remove('active');
    button_item.classList.add('active');
  });
})  

const elements = Document.querySelectorAll(".member");
elements.classList.add('shiny');


function aimt_toggle(){
  tt.style.display= 'none';
  aimt.style.display='flex';
  bt.style.display='none';
  et.style.display='none';
  dmt.style.display='none';
  document.querySelector(".changetitle").innerHTML="AI & Metaverse Team"

  

 
}

function tt_toggle(){
  tt.style.display= 'flex';
  aimt.style.display='none';
  bt.style.display='none';
  et.style.display='none';
  dmt.style.display='none';
  document.querySelector(".changetitle").innerHTML="Tech Team"

  

 
}

function bt_toggle(){
  tt.style.display= 'none';
  aimt.style.display='none';
  bt.style.display='flex';
  et.style.display='none';
  dmt.style.display='none';
  document.querySelector(".changetitle").innerHTML="Blockchain Team"

 
   
}
function et_toggle(){
  tt.style.display= 'none';
  aimt.style.display='none';
  bt.style.display='none';
  et.style.display='flex';
  dmt.style.display='none';
  document.querySelector(".changetitle").innerHTML="Events Team"

  
}
function dmt_toggle(){
  tt.style.display= 'none';
  aimt.style.display='none';
  bt.style.display='none';
  et.style.display='none';
  dmt.style.display='flex';
  document.querySelector(".changetitle").innerHTML="Design & Media team"

  
}
function solve() {
   let button = document.getElementById('send');
   let chatInput=document.getElementById('chat_input');
   let chatMessages=document.getElementById('chat_messages');

   button.addEventListener('click',(e)=>{
      let message=document.createElement('div');
      message.setAttribute('class','message my-message');
      message.innerHTML=chatInput.value;
      chatMessages.appendChild(message);
      chatInput.value='';
   });
}



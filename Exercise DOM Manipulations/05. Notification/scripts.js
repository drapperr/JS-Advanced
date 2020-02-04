function notify(message) {
    const notification=document.querySelector('#notification');
    notification.textContent=message;
    notification.style.display='block';
    function show(){
        notification.style.display='none';
    }
    let timer=setTimeout(show,2000);
    clearTimeout(show)
}
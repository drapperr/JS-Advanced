function toggle() {
    const text=document.querySelectorAll('div div')[1];
    const button=document.querySelector('.button');

    if (button.textContent==='More') {
        text.style.display='block';
        button.textContent='Less';
    }else{
        text.style.display='none';
        button.textContent='More';
    }
}
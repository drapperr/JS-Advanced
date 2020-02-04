function attachEventsListeners() {
    let buttons=document.querySelectorAll('input[type=button]');
    let inputs=document.querySelectorAll('input[type=text]')
    Array.from(buttons).forEach(button => {
        button.addEventListener('click',(e)=>{
            let id=button.previousElementSibling.id;
            let value= +button.previousElementSibling.value;
            let days,hours,minutes,seconds;

            if (id==='days') {
                days=value;
                hours=days*24;
                minutes=hours*60;
                seconds=minutes*60;
            }else if (id==='hours') {
                days=value/24;
                hours=value;
                minutes=hours*60;
                seconds=minutes*60;
            }else if (id==='minutes') {
                days=value/60/24;
                hours=value/60;
                minutes=value;
                seconds=minutes*60;
            }else if (id==='seconds') {
                days=value/60/60/24;
                hours=value/60/60;
                minutes=value/60;
                seconds=value;
            }
            inputs[0].value=days;
            inputs[1].value=hours;
            inputs[2].value=minutes;
            inputs[3].value=seconds;
        });
    });
}
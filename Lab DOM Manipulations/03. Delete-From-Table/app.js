function deleteByEmail() {
    let body=document.querySelector('tbody');
    let emails=body.querySelectorAll('tr');
    let input=document.querySelector('input');
    let result=document.querySelector('#result');

    let indexOfNode=[...emails].map(x=>x.children[1].textContent).indexOf(input.value);
    if (indexOfNode===-1) {
        result.textContent='Not found.';
    } else{
        body.children[indexOfNode].remove();
        result.textContent='Deleted.';
    }
    input.value='';
}
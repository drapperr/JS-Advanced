function mySolution() {
    const inputText = document.querySelector('#inputSection textarea');
    const nameInput = document.querySelector('#inputSection div input');
    const sendButton = document.querySelector('#inputSection div button');
    const pendingQuestios = document.querySelector('#pendingQuestions')
    const openQuestios = document.querySelector('#openQuestions')

    sendButton.addEventListener('click', sendQuestion);

    function sendQuestion() {
        let name = nameInput.value === '' ? 'Anonymous' : nameInput.value;
        let questionDiv = document.createElement('div');
        questionDiv.classList.add('pendingQuestion')

        let image = document.createElement('img');
        image.setAttribute('src', './images/user.png');
        image.setAttribute('width', '32');
        image.setAttribute('height', '32');
        let span = document.createElement('span');
        span.textContent = name;

        let par = document.createElement('p');
        par.textContent = inputText.value;

        let buttonDiv = document.createElement('div');
        buttonDiv.classList.add('actions');

        let archiveButton = document.createElement('button');
        archiveButton.classList.add('archive');
        archiveButton.textContent = 'Archive';
        archiveButton.addEventListener('click', archive);

        let openButton = document.createElement('button');
        openButton.classList.add('open');
        openButton.textContent = 'Open';
        openButton.addEventListener('click', open);

        buttonDiv.appendChild(archiveButton);
        buttonDiv.appendChild(openButton);

        questionDiv.appendChild(image);
        questionDiv.appendChild(span);
        questionDiv.appendChild(par);
        questionDiv.appendChild(buttonDiv);

        pendingQuestios.appendChild(questionDiv);

        inputText.value = '';
        nameInput.value = '';
    }

    function archive(e) {
        e.target.parentNode.parentNode.remove();
    }

    function open(e) {
        let questionDiv = e.target.parentNode.parentNode;
        questionDiv.classList.remove('pendingQuestion');
        questionDiv.classList.add('openQuestion')

        let actionDiv = questionDiv.querySelector('.actions');
        actionDiv.innerHTML = '';

        let replyButton=document.createElement('button');
        replyButton.classList.add('reply');
        replyButton.textContent='Reply';
        replyButton.addEventListener('click',reply);

        let replySection=document.createElement('div');
        replySection.classList.add('replySection');
        replySection.setAttribute('style','display: none;');
        let inputElement=document.createElement('input');
        inputElement.classList.add('replyInput');
        inputElement.setAttribute('type','text');
        inputElement.setAttribute('placeholder','Reply to this question here...');
        let buttonElement=document.createElement('button');
        buttonElement.classList.add('replyButton');
        buttonElement.textContent='Send';
        buttonElement.addEventListener('click',send);
        let olElement=document.createElement('ol');
        olElement.classList.add('reply');
        olElement.setAttribute('type','1');

        replySection.appendChild(inputElement);
        replySection.appendChild(buttonElement);
        replySection.appendChild(olElement);

        actionDiv.appendChild(replyButton);
        questionDiv.appendChild(replySection);
        openQuestios.appendChild(questionDiv);
    }

    function reply(e){
        let question= e.target.parentNode.parentNode.querySelector('.replySection');
        let button=question.parentNode.querySelector('button');
        if (question .style.display==='none') {
            question .style.display='block';
            button.textContent='Back';
        } else{
            question .style.display='none';
            button.textContent='Reply';
        }
      
    }

    function send(e){
        let input=e.target.parentNode.querySelector('input');
        let ol=e.target.parentNode.querySelector('ol');

        let newLi=document.createElement('li');
        newLi.textContent=input.value;
        ol.appendChild(newLi);

        input.value='';
    }
}

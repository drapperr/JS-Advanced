function solve() {
   const author = document.querySelector('#creator');
   const title = document.querySelector('#title');
   const category = document.querySelector('#category');
   const content = document.querySelector('#content');
   const createBtn = document.querySelector('section button');
   const articles = document.querySelector('main section');
   const archiveSection = document.querySelector('.archive-section ul');
   createBtn.addEventListener('click', createText);

   function createText(e) {
      e.preventDefault();
      let newArticle = document.createElement('article');

      let h1 = createNewElement('h1', title.value);

      let pCategory = createNewElement('p', 'Category:')
      let strongpCategory = createNewElement('strong', category.value)
      pCategory.appendChild(strongpCategory);

      let pCreator = createNewElement('p', 'Creator:');
      let strongCreator = createNewElement('strong', author.value);
      pCreator.appendChild(strongCreator);

      let pContent = createNewElement('p', content.value);

      let divButtons = createNewElement('div', null, 'buttons');

      let deleteBtn = createNewElement('button', 'Delete', 'btn');
      deleteBtn.classList.add('delete');
      deleteBtn.addEventListener('click', deleteText);
      let archiveBtn = createNewElement('button', 'Archive', 'btn');
      archiveBtn.classList.add('archive');

      archiveBtn.addEventListener('click', archiveText);

      addChildren(divButtons, [deleteBtn, archiveBtn]);
      addChildren(newArticle, [h1, pCategory, pCreator, pContent, divButtons]);
      articles.appendChild(newArticle)
   }

   function deleteText(e) {
      e.target.parentNode.parentNode.remove();
   }

   function archiveText(e) {
      let newLi = document.createElement('li');
      newLi.textContent = e.target.parentNode.parentNode.querySelector('h1').textContent;
      archiveSection.appendChild(newLi);

      const result = Array.from(archiveSection.children).sort((a, b) => a.innerHTML.localeCompare(b.innerHTML));
      archiveSection.innerHTML = '';
      result.map(li => archiveSection.appendChild(li));

      e.target.parentNode.parentNode.remove();
   }

   function createNewElement(name, textContent, clas) {
      let newElement = document.createElement(name);

      if (textContent) {
         newElement.textContent = textContent;
      }

      if (clas) {
         newElement.classList.add(clas);
      }

      return newElement;
   }

   function addChildren(element, children) {
      children.forEach(child => {
         element.appendChild(child);
      });
   }
}

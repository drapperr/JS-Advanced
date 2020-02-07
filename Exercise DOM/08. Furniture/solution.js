function solve() {
  let input = document.getElementsByTagName('textarea')[0];
  let output = document.getElementsByTagName('textarea')[1];
  let generateButton = document.getElementsByTagName('button')[0];
  let buyButton = document.getElementsByTagName('button')[1];
  let table = document.getElementsByClassName('table')[0].lastElementChild;

  generateButton.addEventListener('click', () => {
    if (input.value==='') {
      return;
    }
    let fornitures = JSON.parse(input.value);
    fornitures.forEach(element => {
      let tableRow = document.createElement('tr');
      let imgData = document.createElement('td');
      let image = document.createElement('img');
      image.setAttribute('src', element.img);
      imgData.appendChild(image);
      tableRow.appendChild(imgData);

      for (const key in element) {
        if (key !== 'img') {
          let td = document.createElement('td');
          let p = document.createElement('p');
          p.innerHTML = element[key];
          td.appendChild(p);
          tableRow.appendChild(td);
        }
      }
      let checkBoxData = document.createElement('td');
      let checkBox = document.createElement('input');
      checkBox.setAttribute('type', 'checkbox');
      checkBoxData.appendChild(checkBox);
      tableRow.appendChild(checkBoxData);
      table.appendChild(tableRow);
    });
    console.log(table.children[0].lastElementChild.children[0].removeAttribute('disabled'));
  });

  buyButton.addEventListener('click', () => {
    let boughtForniture=[];
    let totalPrice=0;
    let totalDecFactor=0;
    let counter=0;

    for (let i = 0; i < table.childElementCount; i++) {
      if (table.children[i].lastElementChild.children[0].checked) {
        console.log(table.children[i].children[1])
        let name=table.children[i].children[1].children[0].innerHTML;
        let price= +table.children[i].children[2].children[0].innerHTML;
        let dFactor= +table.children[i].children[3].children[0].innerHTML;
        boughtForniture.push(name);
        totalPrice+=price;
        totalDecFactor+=dFactor;
        counter++;
      }
    }

    output.innerHTML=`Bought furniture: ${boughtForniture.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${(totalDecFactor/counter)}`
  });
}
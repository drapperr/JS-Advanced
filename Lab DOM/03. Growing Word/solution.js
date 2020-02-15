function growingWord() {
  let paragrph = document.getElementsByTagName('p')[2];

  if (!paragrph.hasAttribute('style')) {
    paragrph.setAttribute('style','');
    paragrph.style.color='blue';
    paragrph.style.fontSize='2px';
  }else {
      let size=paragrph.style.fontSize;
      let color=paragrph.style.color;
      let newSize= (+size.substring(0,size.length-2))*2;
      let newColor;
      if (color==='blue') {
        newColor='green';
      } else if (color==='green') {
        newColor='red';
      } else if (color==='red') {
        newColor='blue';
      }
      paragrph.style.color=newColor;
      paragrph.style.fontSize=`${newSize}px`;
  }
}
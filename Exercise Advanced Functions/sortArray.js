function sortArr(arr,sortingType){
    if (sortingType==='asc') {
        return arr.sort((a,b)=>a-b);
    } else if (sortingType==='desc') {
        return arr.sort((a,b)=>b-a);
    }
}
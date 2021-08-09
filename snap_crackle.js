function snapCrackle(maxValue) {
    let str = '';
    for(i=1; i<=maxValue; i++) {
      if((i%2 !== 0) && (i%5 == 0)) {  //verifica se é multiplo de 5 e impar;
        str += 'SnapCrakle, ';
      } else if(i%2 !== 0) {           //verifica se é impar;
        str += 'Snap, '; 
      } else if(i%5 == 0) {          //verifica se é multiplo de 5;
        str += 'Crakle, ';
      } else {
        str += i + ", " ;        
      }
    }
    return str;
}
console.log(snapCrackle(25))



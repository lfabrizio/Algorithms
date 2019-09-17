// factorialize 

function factorialize(num) {
    if(num === 0){
      return 1;
    }
    var factor = num * factorialize(num - 1);
    
      return factor;
    }
    
    factorialize(5);
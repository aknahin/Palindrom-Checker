function palindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]+/g, '');
    str = str.toLowerCase();
    var j = str.length - 1; 
    var check = 0;
    for (let i = 0; i<=Math.floor(str.length/2); i++) {
      if (str[i] != str[j]) {
        break;
      }
      else {
        j -= 1;
        check +=1;
      }
    }
    if (check == Math.floor(str.length/2)+1) {
      return true;
    }
    else {
      return false;
    }
  }
  
  palindrome("eye");
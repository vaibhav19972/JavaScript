var displayArea = document.getElementById('display')
var str='';
var prev = '';
function btclick(x){
      displayArea.innerText = displayArea.innerText + x; 
      if(Number(x) || x == '+'|| x=='*' || x=='-' || x=='/' || x=='%' || x == '00'|| x=='0'){
            str += x;
      }
      if('='== x){
          displayArea.innerText = eval(str)
          str=String(eval(str))
      }

      if('cls'== x){
            str=''
            displayArea.innerText =''
      }
      if('del' == x){
            let n= str.length;
            str =str.substring(0,n-1)
            displayArea.innerText =str
            console.log(n)
      }
     console.log(str)
}



     


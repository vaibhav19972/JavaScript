var displayArea = document.getElementById('display')

function isOperator(x){
      if( 
             x == '+'||
             x=='*'  || 
             x=='-'  || 
             x=='/'  || 
             x=='%' 
         )
         return  true
      else 
         return false
}

function btclick(x){
   if(displayArea.innerText.length>=17)
       return

   if(x != "cls" && x !='del' && x != '='){
      if(displayArea.innerText === '0'){
         if(x != '00' && x != '0' ){
              if( x == '.' || isOperator(x)){
                  displayArea.innerText = displayArea.innerText +x;
              }else{
                  displayArea.innerText = x; 
            }
      }
       
      }else{
            if(isOperator(displayArea.innerText[displayArea.innerText.length -1] ) && isOperator(x)){
                  displayArea.innerText = displayArea.innerText.slice(0,-1) + x;
            }else{
                  displayArea.innerText = displayArea.innerText + x; //main display
            } 
      }
    }else{
          if(x==='cls'){
            displayArea.innerText ='0' ;
          }else if(x==='del'){
            displayArea.innerText = displayArea.innerText.slice(0,-1);
          }else{
              try{
                     displayArea.innerText = eval(displayArea.innerText); 
                  } catch(error){
                      displayArea.innerText ='0';
                  } 
          }

    }
     
}

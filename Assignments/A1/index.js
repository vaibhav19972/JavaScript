



function fetch(){
  var b1 =document.getElementById('b1').value
  var b2 = document.getElementById('b2').value
  var b3 = document.getElementById('b3').value
  var b4 = document.getElementById('b4').value
  var b5 = document.getElementById('b5').value
  
  document.getElementById('i1').innerText = cal(b1)
  document.getElementById('i2').innerText = cal(b2)
  document.getElementById('i3').innerText = cal(b3)
  document.getElementById('i4').innerText = cal(b4)
  document.getElementById('i5').innerText = cal(b5)
 
}


function cal(bal){
   bal = Number(bal)
   if( bal > 200000){
       bal += 0.1*bal
      // bal -= 0.002*bal
   }
   else if( bal > 100000){
       bal += 0.05*bal
       bal -= 0.0005*bal
   }else{
      bal += 0.02*bal
   }
   console.log(bal)
  return bal
  
}
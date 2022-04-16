let date = prompt('Enter Your Day With Month','1 jan') ;
const currdate = new Date();
let next = Number(currdate.getFullYear()+1);  
date = date+" "+next;
const userdate = new Date(date);

const dayobj = document.getElementById('days')
const hourobj = document.getElementById('hours')
const minobj = document.getElementById('minutes')
const secobj = document.getElementById('seconds')

function count(){
      
      const currdate = new Date();
      let totalSeconds = (userdate -currdate)/1000;
      const day= Math.floor(totalSeconds/3600/24)%365;
      const hour=Math.floor(totalSeconds/3600)%24;
      const min = Math.floor(totalSeconds/60)%60;
      const sec= Math.floor(totalSeconds%60);
      console.log(day,sec)
      dayobj.innerHTML=day
      hourobj.innerHTML=format(hour)
      minobj.innerHTML=format(min)
      secobj.innerHTML=format(sec)
}
function format(time){
      return time<10 ? '0'+time : time
}
count()
setInterval(count,1000)



     


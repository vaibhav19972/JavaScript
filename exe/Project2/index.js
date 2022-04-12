var panel1 = document.getElementById('panel-1')
var panel2 = document.getElementById('panel-2')
var panel3 = document.getElementById('panel-3')
var panel4 = document.getElementById('panel-4')
var panel5 = document.getElementById('panel-5')

function fun1(){
    var re=getactive()
    re.classList.remove('active')
    panel1.classList.add('active'); 
}
function fun2(){
    var re=getactive()
    re.classList.remove('active')
    panel2.classList.add('active'); 
    

}
function fun3(){
    var re=getactive()
    re.classList.remove('active')
    panel3.classList.add('active'); 
}
function fun4(){
    var re=getactive()
    re.classList.remove('active')
    panel4.classList.add('active'); 
}
function fun5(){
    var re=getactive()
    re.classList.remove('active')
    panel5.classList.add('active'); 
}
function getactive(){
    var activepanel 
    if(panel1.classList.contains('active'))
          activepanel=panel1
    if(panel2.classList.contains('active'))
          activepanel=panel2
    if(panel3.classList.contains('active'))
          activepanel=panel3
    if(panel4.classList.contains('active'))
          activepanel=panel4
    if(panel5.classList.contains('active'))
         activepanel=panel5
    return activepanel
}
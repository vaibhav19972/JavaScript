var panel1 = document.getElementById('panel-1')
var panel2 = document.getElementById('panel-2')
var panel3 = document.getElementById('panel-3')
var panel4 = document.getElementById('panel-4')
var panel5 = document.getElementById('panel-5')

function selectPanel(panelname){
      removeactive()
      panelname.classList.add('active')
      changebg(panelname)
    }
function removeactive(){
      panel1.classList.remove('active') 
      panel2.classList.remove('active') 
      panel3.classList.remove('active') 
      panel4.classList.remove('active') 
      panel5.classList.remove('active') 
}


const lookup = {
    'A': 'N','B': 'O','C': 'P','D': 'Q',
    'E': 'R','F': 'S','G': 'T','H': 'U',
    'I': 'V','J': 'W','K': 'X','L': 'Y',
    'M': 'Z','N': 'A','O': 'B','P': 'C',
    'Q': 'D','R': 'E','S': 'F','T': 'G',
    'U': 'H','V': 'I','W': 'J','X': 'K',
    'Y': 'L','Z': 'M',
  };
  console.table(lookup)
  let decode = (encodedStr) => encodedStr.split('').map((elem)=>{
      if(lookup[elem] == undefined )
        return elem;
      else
        return lookup[elem];
    }).join('')
  let encode = (str) => str.split("").map(
    (ele)=>{
      if(lookup[ele] == undefined) 
        return ele
      else
        return lookup[ele]
    }
  ).join('')
var password
var run = ()=>{

    password= document.getElementById('pass').value
    password = encode(password.toUpperCase())
    document.getElementById('show1').innerText = `password saved as ${password}`

}
var run2 = ()=>{

    let check= document.getElementById('check').value
    console.log(check.toUpperCase(), `=`, encode(check))
      if( check.toUpperCase() == decode(password)  ){
        document.getElementById('show2').innerText = `login success`
      }else{
        document.getElementById('show2').innerText = `login failed`
      }
}

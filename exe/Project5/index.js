const lookup = {
    'A': 'N','B': 'O','C': 'P','D': 'Q',
    'E': 'R','F': 'S','G': 'T','H': 'U',
    'I': 'V','J': 'W','K': 'X','L': 'Y',
    'M': 'Z','N': 'A','O': 'B','P': 'C',
    'Q': 'D','R': 'E','S': 'F','T': 'G',
    'U': 'H','V': 'I','W': 'J','X': 'K',
    'Y': 'L','Z': 'M',
  };
  console.log("Encryption Used",lookup)
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

let password
let run = ()=>{
    password= document.getElementById('pass').value
    password = encode(password.toUpperCase())
    console.log(`Password saved as ${password}`)
    document.getElementById('show1').innerText = `Password saved successfully`
}
let run2 = ()=>{

    let c= document.getElementById('check').value
    console.log(`Decodeing saved password...`)
      if( c.toUpperCase() == decode(password)  ){
        document.getElementById('show2').innerText = `Password correct, login access granted!`
        console.log(`Password Matched`)
      }else{
        document.getElementById('show2').innerText = `Password incorrect, access denied!`
        console.log(`Password doesnt match`)
      }
}
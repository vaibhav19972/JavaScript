const lookup = {
  'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
  'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
  'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
  'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
  'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
  'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
  'Y': 'L', 'Z': 'M',
  'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q',
  'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
  'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y',
  'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
  'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
  'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
  'y': 'l', 'z': 'm',
  '0': '5', '1': '6', '2': '7', '3': '8',
  '4': '9', '5': '0', '6': '1', '7': '2',
  '8': '3', '9': '4',
  '!': '#', '$': '%', '&': '+', '-': '@',
  '_': '~', '#': '!', '%': '$', '+': '&',
  '@': '-', '~': '_'
};
console.log("Encryption Used", lookup)
let decode = (encodedStr) => encodedStr.split('').map((elem) => {
  if (lookup[elem] == undefined)
    return elem;
  else
    return lookup[elem];
}).join('')
let encode = (str) => str.split("").map(
  (ele) => {
    if (lookup[ele] == undefined)
      return ele
    else
      return lookup[ele]
  }
).join('')

let password
let run = () => {
  password = document.getElementById('pass').value
  if (password.length <= 8) {
    document.getElementById('show1').innerText = `Password is weak enter more then 8 characters`
    return;
  }
  password = encode(password)
  console.log(`Password saved as ${password}`)
  document.getElementById('show1').innerText = `Password saved successfully`
}
let run2 = () => {
  if (password == undefined || password.length <= 8) {
    document.getElementById('show2').innerText = `Password doesn't exist`
    return;
  }

  let check = document.getElementById('check').value
  console.log(`Decodeing saved password...`)
  if (check == decode(password)) {
    document.getElementById('show2').innerText = `Password correct, login access granted!`
    console.log(`Password Matched`)
  } else {
    document.getElementById('show2').innerText = `Password incorrect, access denied!`
    console.log(`Password doesnt match`)
  }
}
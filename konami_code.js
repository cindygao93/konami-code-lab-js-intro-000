const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  //const body = document.querySelector('body')

  var index = 0
  document.querySelector('body').addEventListener('keydown', function(e){
    if(parseInt(e.which) === code[index]){
      index++
      if(index === code.length-1){
        alert("YOU DID IT!")
        index = 0
      }
    }
    else{
      index = 0
    }
  })
}

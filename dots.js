function dots(){
  let userInput = document.getElementById("user").value;
  let whitespaceCount = /\s/gm;
  let newLineCount = /\n/gm;
  
  
  document.write(userInput.replace(whitespaceCount, " * "));
  document.write(userInput.replace(newLineCount, " * "));

  console.log(userInput.replace(whitespaceCount, " * "));
  console.log(userInput.replace(newLineCount, " * "));
}
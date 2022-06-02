import * as tokenizer from "tokenizers-wasm";

const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);

function handleFiles() {
  let reader = new FileReader();
  reader.onload = function(event) {
    let json = event.target.result;
    let ids = tokenizer.tokenize(json, "I don't love AI and privacy!");
    console.log(ids)
  };
  reader.readAsText(inputElement.files[0]);
}

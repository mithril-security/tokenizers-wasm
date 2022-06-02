import * as tokenizers from "tokenizers-wasm";

let tokenizer;
const fileBrowser = document.getElementById("browser");
fileBrowser.addEventListener("change", handleTokenizer, false);
const textField = document.getElementById("text");
const button = document.getElementById("button");
button.addEventListener("click", handleInput, false);
const outputIds = document.getElementById("output-ids");
const outputText = document.getElementById("output-tokens");

function handleTokenizer() {
  let reader = new FileReader();
  reader.onload = function(event) {
    let json = event.target.result;
    tokenizer = new tokenizers.TokenizerWasm(json);
  };
  reader.readAsText(fileBrowser.files[0]);
}

function handleInput() {
  let text = textField.value;
  let encoding = tokenizer.encode(text, false);
  outputIds.innerHTML = "ids : [" + encoding.get_ids() + "]";
  outputText.innerHTML = "tokens : [" + encoding.get_tokens() + "]";
}

import { Tokenizer } from "tokenizers-js";

let tokenizer;
const fileBrowser = document.getElementById("browser");
fileBrowser.addEventListener("change", handleFile, false);
const nameField = document.getElementById("name");
const loadButton = document.getElementById("load");
loadButton.addEventListener("click", handlename, false);
const textField = document.getElementById("text");
const tokenizeButton = document.getElementById("tokenize");
tokenizeButton.addEventListener("click", handleInput, false);
const outputIds = document.getElementById("output-ids");
const outputText = document.getElementById("output-tokens");

function handleFile() {
  let reader = new FileReader();
  reader.onload = function(event) {
    let json = event.target.result;
    tokenizer = new Tokenizer(json);
  };
  reader.readAsText(fileBrowser.files[0]);
}

async function handlename() {
  let name = nameField.value;
  tokenizer = await Tokenizer.from_pretrained(name);
}

function handleInput() {
  let text = textField.value;
  let encoding = tokenizer.encode(text, false);
  outputIds.innerHTML = "ids : [" + encoding.input_ids + "]";
  outputText.innerHTML = "tokens : [" + encoding.tokens + "]";
}
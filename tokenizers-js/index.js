import * as tokenizers from "tokenizers-wasm";

export class Tokenizer {
  constructor(json) {
    this.tokenizer = new tokenizers.TokenizerWasm(json);
  }

  static from_pretrained(name) {
    return fetch(`https://huggingface.co/${name}/resolve/main/tokenizer.json`)
      .then(response => response.text())
      .then(json => new Tokenizer(json));
  }

  encode(text) {
    return this.tokenizer.encode(text);
  }
}
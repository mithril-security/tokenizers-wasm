# tokenizers-wasm

Bindings of huggingface tokenizers for web assembly.

For now it's just a mock app to showcase how we can use tokenizers in js.

To run the example :

```
wasm-pack build
cd example
npm install
npm run start
```

then go to localhost:8080 and load the json file of serialized tokenizer (like this one : https://huggingface.co/openai-gpt/raw/main/tokenizer.json)

you can then enter a string and see the tokenized result
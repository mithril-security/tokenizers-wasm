import { Tokenizer } from "huggingface-tokenizers-bindings";

async function main() {
    let tokenizer = await Tokenizer.from_pretrained("gpt2");
    let encoding = tokenizer.encode("I love AI and privacy", false);
    console.log(encoding.input_ids);
    console.log(encoding.tokens);
}

main();
import { Tokenizer } from "huggingface-tokenizers-bindings";

const INPUT = "I love AI and privacy";

async function main() {
    let tokenizer = await Tokenizer.from_pretrained("gpt2");
    let encoding = tokenizer.encode(INPUT, false);
    document.getElementById("input").innerHTML = INPUT;
    document.getElementById("tokens").innerHTML = "[" + encoding.tokens + "]"
    document.getElementById("input_ids").innerHTML = "[" + encoding.input_ids + "]";
}

main();
mod utils;

use wasm_bindgen::prelude::*;
use tokenizers::tokenizer::{Result, Tokenizer, EncodeInput};
use std::str::FromStr;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn tokenize(json: &str, text: &str) -> String {
    let tokenizer = Tokenizer::from_str(json.into()).unwrap();
    let encoding = tokenizer.encode(text, false).unwrap();
    return encoding.get_tokens().join("").into();
}

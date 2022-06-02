mod utils;
use wasm_bindgen::prelude::*;
use tokenizers::tokenizer::{Result, Tokenizer, EncodeInput, Encoding};
use std::str::FromStr;
use js_sys;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub struct TokenizerWasm {
    tokenizer: Tokenizer
}

#[wasm_bindgen]
impl TokenizerWasm {
    #[wasm_bindgen(constructor)]
    pub fn new(json: &str) -> TokenizerWasm {
        TokenizerWasm { tokenizer: Tokenizer::from_str(json.into()).unwrap().into() }
    }

    pub fn encode(&self, text: &str, add_special_tokens: bool) -> EncodingWasm {
        EncodingWasm {encoding : self.tokenizer.encode(text, add_special_tokens).unwrap() }
    }
}

#[wasm_bindgen]
pub struct EncodingWasm {
    encoding: Encoding
}

#[wasm_bindgen]
impl EncodingWasm {
    pub fn get_ids(&self) -> js_sys::Uint32Array {
        self.encoding.get_ids().into()
    }

    pub fn get_tokens(&self) -> js_sys::Array {
        self.encoding.get_tokens().iter().map(|x| js_sys::JsString::from(x.as_str())).collect()
    }
}
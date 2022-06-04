use wasm_bindgen::prelude::*;
use tokenizers::tokenizer::{Tokenizer, Encoding};
use std::str::FromStr;
use js_sys;

#[wasm_bindgen]
pub struct TokenizerWasm {
    tokenizer: Tokenizer
}

#[wasm_bindgen]
impl TokenizerWasm {

    #[wasm_bindgen(constructor)]
    pub fn from_buffer(json: String) -> TokenizerWasm {
        TokenizerWasm { tokenizer: Tokenizer::from_str(json.as_str()).unwrap().into() }
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

    #[wasm_bindgen(method, getter = input_ids)]
    pub fn get_ids(&self) -> js_sys::Uint32Array {
        self.encoding.get_ids().into()
    }

    #[wasm_bindgen(method, getter = tokens)]
    pub fn get_tokens(&self) -> js_sys::Array {
        self.encoding.get_tokens().iter().map(|x| js_sys::JsString::from(x.as_str())).collect()
    }
}
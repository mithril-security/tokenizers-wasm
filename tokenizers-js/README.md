# tokenizers-js

js-like interface on top of tokenizers-wasm.

The main inconvenience of binding rust to wasm is that rust traits can't be converted to js class inheritance. So this is a wrapper around the wasm bindings to get a more js-like API. 
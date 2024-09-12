type Sele = keyof HTMLElementTagNameMap;
const $ = (sele: Sele) => document.querySelector(sele);
const $$ = (sele: Sele) => Array(...document.querySelectorAll(sele));

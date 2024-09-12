type Sele = keyof HTMLElementTagNameMap;
export const $ = (sele: Sele) => document.querySelector(sele);
export const $$ = (sele: Sele) => Array(...document.querySelectorAll(sele));

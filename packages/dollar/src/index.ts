type Sele = keyof HTMLElementTagNameMap;
export const $ = document.querySelector.bind(document);
export const $$ = (sele: Sele) => Array(...document.querySelectorAll(sele));
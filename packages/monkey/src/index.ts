type Sele = keyof HTMLElementTagNameMap;
const $ = (sele: Sele) => document.querySelector(sele);
const $$ = (sele: Sele) => Array(...document.querySelectorAll(sele));
const del = (sele: Sele) => {
  $$(sele)?.forEach((el) => {
    el?.remove();
  });
};
const none = (sele: Sele) => {
  $$(sele)?.forEach((el) => {
    if (el.style.display === "none") return;
    el.style.display = "none";
  });
};

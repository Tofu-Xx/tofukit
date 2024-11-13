const _handle = (raw: TemplateStringsArray, vars: any[]) =>
  raw.map((part, i) => part + (vars[i] ?? "")).join("")

export default (strings: TemplateStringsArray, ...args: any[]) => {
  const cssString = _handle(strings, args);
  // const styleSheet = new CSSStyleSheet();
  // styleSheet.replaceSync(cssString);
  // document.adoptedStyleSheets.push(styleSheet)
  const styleEl = document.createElement('style');
  styleEl.textContent = cssString;
  document.head.appendChild(styleEl);
};

  /* 
   cij['button']({
    backgroundColor: 'red',
    color: 'white',
    '&:hover': {
      backgroundColor: 'blue',
    }
  })
  */
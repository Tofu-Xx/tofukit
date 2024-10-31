const _handle = (raw: TemplateStringsArray, vars: any[]) =>
  raw.map((part, i) => part + (vars[i] ?? "")).join("")

export const cij = (strings: TemplateStringsArray, ...args: any[]) => {
  const cssString = _handle(strings, args);
  const styleSheet = new CSSStyleSheet();
  styleSheet.replaceSync(cssString);
  document.adoptedStyleSheets.push(styleSheet)
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
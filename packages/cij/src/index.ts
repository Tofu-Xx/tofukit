const _handle = (raw: TemplateStringsArray, vars: any[]) =>
  raw.reduce(
    (result: string, part: string, i: number) =>
      result + part + (vars[i] ??= ""),
    "",
  )

export const cij = ({ raw }, ...args: any[]) => {
  const cssString = _handle(raw, args);
  const style = document.createElement("style");
  style.textContent = cssString;
  document.querySelector("head")?.appendChild(style);
};

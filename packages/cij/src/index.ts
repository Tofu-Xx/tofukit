const _handle = (raw: TemplateStringsArray, vars: any[]) =>
  raw.reduce(
    (result: string, part: string, i: number) =>
      result + part + (vars[i] ??= ""),
    "",
  );
export const cij = ({ raw }, ...args: any[]) => {
  const cssString = _handle(raw, args);
  const style = document.createElement("style");
  style.textContent = cssString;
  document.querySelector("head")?.appendChild(style);
};

// export const hij = ({ raw }, ...args: any[]) => ({
//   mount: (select: string) => {
//     document.querySelector(select)!.innerHTML = _handle(raw, args);
//   },
  // const parser = new DOMParser();
  // const doc = parser.parseFromString(`<hij>${htmlString}</hij>`, "text/html")
  //   .querySelector(
  //     "hij",
  //   )!.children;
  // return doc.length > 1 ? Array.from(doc) : doc[0];
// });

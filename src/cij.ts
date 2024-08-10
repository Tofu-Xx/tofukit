export const cij = ({ raw }, ...args: any[]) => {
  const cssString = raw.reduce(
    (result: string, part: string, i: number) =>
      result + (part.startsWith("\n") ? `;${part}` : part) + (args[i] ??= ""),
    "",
  );
  const style = document.createElement("style");
  style.textContent = cssString;
  document.body.appendChild(style);
};

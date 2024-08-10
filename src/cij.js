const cij = ({raw},...c) => {
  console.log(raw)
  console.log(c)
};

cij`${1}
*{
  all:${'none;'}
}
div{
  all:${'revert;'}
}
${-1}`;
<h1 align=center>resetcss</h1>

### introduce

css in js

### use

```js
import cij from 'https://unpkg.com/@tofukit/cij/dist/cij.esm.js'
cij`
  .button {
    color: red;
  }
`
```
or
```html
<script src="https://unpkg.com/@tofukit/cij/dist/cij.iife.js"></script>
<button class="button">button</button>
<script>
  cij`
    .button {
      color: red;
    }
  `
</script>
```

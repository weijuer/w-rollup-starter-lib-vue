# w-rollup-starter-lib-vue
This repo contains a bare-bones example of how to create a vue base UI library using Rollup, including importing a module from `node_modules` and converting it from CommonJS.

# devDependencies info
- JSON
  - @rollup/plugin-json 
- CSS
  - rollup-plugin-postcss
  - postcss
  - autoprefixer
  - cssnano
  - less
- Vue
  - rollup-plugin-vue
  - @vue/compiler-sfc
  
# Usage

for umd

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>myLib</title>
  <link rel="stylesheet" href="./dist/index.css">
</head>

<body>
  <div id="app">
    <hello-world name="myLib"></hello-world>
  </div>
  <script src="./vue.global.js"></script>
  <script src="./dist/my-lib.umd.js"></script>
  <script type="module">
    // umd
    const { createApp } = Vue;
    const app = createApp();
    console.log('myLib', myLib)

    app.use(myLib);
    app.mount('#app');
  </script>
</body>

</html>
```

for esm

```js
// esm
import { createApp } from 'vue'
import myLib from 'w-rollup-starter-lib-vue'
import 'w-rollup-starter-lib-vue/dist/index.css'

createApp().use(myLib).mount('#app')
```
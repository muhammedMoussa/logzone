# logzone 🍭
> a package to print pretty log messages. you can use predefined or customize your own!

![npm](https://img.shields.io/npm/dt/logzone) 
[![](https://data.jsdelivr.com/v1/package/npm/logzone/badge)](https://www.jsdelivr.com/package/npm/logzone)

# Installation ⚙️

```shell
npm install logzone
or
yarn add logzone

```

## Methodes

the package has some built-in methods, the below graph explains them with the arguments.

| Method         | Description                                                 |arguments                                 |
|----------------|-------------------------------------------------------------|------------------------------------------|
|`log`           | the method you can use for customization your log.          | `log(msg, color, background , fontSize)` <br /> - **msg**: the log message - required. <br />  - **color**: log text color - optional - type: `string` - default: `""`. <br /> -  **background**: log background color - optional - type: `string` - default: `""`. <br /> - **fontSize**: log font size in px - optional - type: accept both `number or string` - default: `browser default`. | 
|`success`           | predefined method for success logs.          | `success(msg, fontSize)`  <br />  - **msg**: the log message - required. <br /> -  **fontSize**: log font size in px - optional - type: accept both `number or string` - default: `browser default`.| 
|`info`           | predefined method for info logs.          | `info(msg, fontSize)`  <br />  - **msg**: the log message - required.  <br /> -  **fontSize**: log font size in px - optional - type: accept both `number or string` - default: `browser default`.|
|`warning`           | predefined method for warning logs.          | `warning(msg, fontSize)`  <br />  - **msg**: the log message - required.  <br /> -  **fontSize**: log font size in px - optional - type: accept both `number or string` - default: `browser default`.|
|`danger`           | predefined method for error logs.          | `danger(msg, fontSize)`  <br />  - **msg**: the log message - required.  <br /> -  **fontSize**: log font size in px - optional - type: accept both `number or string` - default: `browser default`.|

> Feel free to open a pull requests and add your favorite theme too.

## Examples...

## ES.Next

```javascript
import { log, success, info, warning, danger } from "logzone";

log("I'm customizable log!", "black", "red", 25 );

success("I'm predefined logzone baby success log!");
success("I'm predefined logzone baby success log, with custom font size!", 14);

info("I'm predefined logzone baby info log!");
info("I'm predefined logzone baby info log, with custom font size!", 14);

warning("I'm predefined logzone baby warning log!");
warning("I'm predefined logzone baby warning log, with custom font size!",14);

danger("I'm predefined logzone baby danger log!");
danger("I'm predefined logzone baby danger log, with custom font size!", 14);
```

## Old School

```html
<!-- Include latest version from  https://www.jsdelivr.com/package/npm/logzone -->
<script src="https://cdn.jsdelivr.net/npm/logzone@1.0.0/dist/logzone.min.js"></script>

<script>
    logzone.log("I'm customizable log!", "black", "red", 25);
    logzone.success("I'm predefined logzone baby success log!");
    logzone.success("I'm predefined logzone baby success log, with custom font size!", 14);

    logzone.info("I'm predefined logzone baby info log!");
    logzone.info("I'm predefined logzone baby info log, with custom font size!", 14);

    logzone.warning("I'm predefined logzone baby warning log!");
    logzone.warning("I'm predefined logzone baby warning log, with custom font size!", 14);

    logzone.danger("I'm predefined logzone baby danger log!");
    logzone.danger("I'm predefined logzone baby danger log, with custom font size!", 14);
</script>
```

## One Result! 🔥

<img  src="https://i.imgur.com/hGlkJvg.png"> 

### Examples Links
- [Live Example - Native JavaScript](https://stackblitz.com/edit/logzone-demo?devtoolsheight=33&file=index.js).
- [Live Example - Native HTML](https://stackblitz.com/edit/logzone-html-demo?devtoolsheight=33&file=index.js).
- [Live Example - React](https://stackblitz.com/edit/logzone-react-demo?devtoolsheight=33&file=index.js).

## Todo ✔️
- add `init()` method.
- add more themes.
- tailwind colors utils compatibility.
- add React hook.

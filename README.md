# relationship-selector-plugin

A plugin to select adjacent elements in Tailwind.

## How to install

```bash
    npm install https://github.com/SamuelPatrickMeneses/relationship-selector-plugin.git
```
## User guide

### Configure the tailwind.config.js

```js
    /** @type {import('tailwindcss').Config} */
const plugin = require('relationship-selector-plugin');

module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin({
        nex: ['div', 'p'], // specific elements
        bro: ['.some-class','text-sm'], // specific classes
        son: ['li#id'], // compound selectors
        dow: ['*'] // select all descendants
    }
    )],
};
```

### Added prefixes

 - nex:tailwind-class == tailwind-class + selectors-setted
 - bro:tailwind-class == tailwind-class ~ selectors-setted
 - son:tailwind-class == tailwind-class > selectors-setted
 - dow:tailwind-class == tailwind-class selectors-setted



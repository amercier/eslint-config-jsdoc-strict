eslint-config-jsdoc-strict
==========================

> ESLint [shareable config] for JSDoc-related rules:
> - ESLint [require-jsdoc] and [valid-jsdoc] rules,
> - All [eslint-plugin-jsdoc] plugin rules.

[![Latest Stable Version](https://img.shields.io/npm/v/eslint-config-jsdoc-strict.svg)](https://www.npmjs.com/package/eslint-config-jsdoc-strict)
[![NPM Downloads](https://img.shields.io/npm/dm/eslint-config-jsdoc-strict.svg)](https://www.npmjs.com/package/eslint-config-jsdoc-strict)
[![Build Status](https://travis-ci.org/amercier/eslint-config-jsdoc-strict.svg?branch=master)](https://travis-ci.org/amercier/eslint-config-jsdoc-strict)
[![dependencies Status](https://david-dm.org/amercier/eslint-config-jsdoc-strict/status.svg)](https://david-dm.org/amercier/eslint-config-jsdoc-strict)

Example of valid code:

```js
/**
 * Description must be capitalised, end with a dot, and have a trailing new line.
 *
 * @example
 * // Functions must have a `@example` declaration
 * myFunction(null, 1, true, 'hello', () => {}, {}, []);
 * // => ...
 *
 * @param {*} param - Parameters must have a type. Descriptions must be capitalised,
 * be preceded by a hyphen, and end with a dot.
 * @param {number} num - Primitive types must be lowercased.
 * @param {boolean} bool - Primitive types must be lowercased.
 * @param {string} str - Primitive types must be lowercased.
 * @param {Function} fn - Functions can also be described using `@callback`.
 * @param {Object} obj - Object.
 * @param {Array} array - Arrays can also be defined as `<TYPE>[]`. Ex: `string[]`.
 * @returns {undefined} Functions must have a return type and description.
 */
function myFunction(param, num, bool, str, fn, obj, array) {
  // ...
}
```

Installation
------------

Prerequisites:
- [Node.js](https://nodejs.org/) 6+, **npm** 3+.
- [ESLint] 4+

```sh
npm install --save-dev eslint-plugin-jsdoc eslint-config-jsdoc-strict
```

[![peerDependencies Status](https://david-dm.org/amercier/eslint-config-jsdoc-strict/peer-status.svg)](https://david-dm.org/amercier/eslint-config-jsdoc-strict?type=peer)

Usage
-----

Add this to your `.eslintrc.json`:
```json
{
  "extends": [
    "... (your usual ESLint config, if any) ...",
    "jsdoc-strict"
  ]
}
```

Contributing
------------

Please refer to the [guidelines for contributing](./CONTRIBUTING.md).

[![devDependencies Status](https://david-dm.org/amercier/eslint-config-jsdoc-strict/dev-status.svg)](https://david-dm.org/amercier/eslint-config-jsdoc-strict?type=dev)

License
-------

[![License](https://img.shields.io/npm/l/eslint-config-jsdoc-strict.svg)](LICENSE.md)

---
<sup>_Created with [npm-package-skeleton](https://github.com/amercier/npm-package-skeleton)._</sup>

[shareable config]: https://eslint.org/docs/developer-guide/shareable-configs
[ESLint]: https://eslint.org/
[require-jsdoc]: https://eslint.org/docs/rules/require-jsdoc
[valid-jsdoc]: https://eslint.org/docs/rules/valid-jsdoc
[eslint-plugin-jsdoc]: https://www.npmjs.com/package/eslint-plugin-jsdoc
[Node.js]: https://nodejs.org/

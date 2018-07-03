/**
 * Description must be capitalised, end with a dot, and have a trailing new line.
 *
 * @example
 * // Functions must have a `@example` declaration
 * myFunction(null, 1, true, 'hello', () => {}, {}, []);
 * // => {
 * //   param: null,
 * //   num: 1,
 * //   bool: true,
 * //   str: 'hello',
 * //   fn: () => {},
 * //   obj: {},
 * //   array: []
 * // }
 *
 * @param {*} param - Parameters must have a type. Descriptions must be capitalised,
 * be preceded by a hyphen, and end with a dot.
 * @param {number} num - Primitive types must be lowercased.
 * @param {boolean} bool - Primitive types must be lowercased.
 * @param {string} str - Primitive types must be lowercased.
 * @param {Function} fn - Functions can also be described using `@callback`.
 * @param {Object} obj - Object.
 * @param {Array} array - Arrays can also be defined as `<TYPE>[]`. Ex: `string[]`.
 * @returns {Object} Functions must have a return type and description.
 */
function myFunction(param, num, bool, str, fn, obj, array) {
  // ...
  return {
    param, num, bool, str, fn, obj, array,
  };
}

module.exports = myFunction;

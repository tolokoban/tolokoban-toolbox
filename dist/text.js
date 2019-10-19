"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = { capitalize: capitalize, camelize: camelize };
/**
 * Ensure the first character of "name" is in upper case.
 */
function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.substr(1);
}
/**
 * Transform "foo-bar-joe" into "fooBarJoe"
 */
function camelize(name) {
    return name
        .split('-')
        .filter(function (t) { return t.length > 0; })
        .map(function (t, i) { return i === 0 ? t.toLowerCase() : capitalize(t.toLowerCase()); })
        .join('');
}

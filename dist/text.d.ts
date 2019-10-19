declare const _default: {
    capitalize: typeof capitalize;
    camelize: typeof camelize;
};
export default _default;
/**
 * Ensure the first character of "name" is in upper case.
 */
declare function capitalize(name: string): string;
/**
 * Transform "foo-bar-joe" into "fooBarJoe"
 */
declare function camelize(name: string): string;

export default { capitalize, camelize }

/**
 * Ensure the first character of "name" is in upper case.
 */
function capitalize(name: string): string {
    return name.charAt(0).toUpperCase() + name.substr(1)
}

/**
 * Transform "foo-bar-joe" into "fooBarJoe"
 */
function camelize(name: string): string {
    return name
        .split('-')
        .filter(t => t.length > 0)
        .map((t, i) => i === 0 ? t.toLowerCase() : capitalize(t.toLowerCase()))
        .join('')
}

export default class token {
    static get types() {
        return {
            // , ; ( ) { } [ ] : .
            DELIMITER: 'delimiter',
            // + - * / = ^ % ! ?
            OPERATOR: 'operator',
            // 123
            NUMBER: 'number',
            // 'hello world'
            STRING: 'string',
            // type fn
            KEYWORD: 'keyword',
        }
    }

    constructor(type, value) {
        this.type = type
        this.value = value

        // Check if type is invalid
        if(!Object.values(token.types).includes(this.type))
            throw new Error('Token type was invalid: ' + this.type)
    }
}
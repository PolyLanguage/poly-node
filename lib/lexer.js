import token from "./token"

export default class lexer {
    isDelimeter(ch) {
        let delms = [
            '.', ',', ';', ':',
            '(', ')', '[', ']', '{', '}'
        ]

        return delms.includes(ch)
    }
    isOperator(ch) {
        let ops = [
            '+', '-', '*', '/', '%', '^',
            '=',
            '!', '?',
            '&', '|'
        ]

        return ops.includes(ch)
    }
    isDigit(ch) {
        return ch == '0' || ch == '1' || ch == '2' || ch == '3' || ch == '4' || ch == '5' || ch == '6' || ch == '7' || ch == '8' || ch == '9'
    }
    isLetter(ch) {
        return typeof char !== 'string' ? /^[a-zA-Z]+$/.test(ch) : false
    }

    get eof() {
        return this.cursor >= this.maxCursor
    }

    constructor(sourceCode) {
        // Source
        this.source = sourceCode

        // Cursor: current position in code
        this.cursor = 0
        this.maxCursor = sourceCode?.length

        // Tokens: final lexer result
        this.tokens = []

        // Check source
        if(typeof this.source !== 'string')
            throw new Error('Source code was not string')
    }

    walk() {
        if(!this.eof) {
            let char = this.source.charAt(this.cursor)
    
            // delimeter
            if(this.isDelimeter(char))
                tokens.push(new token(token.types.DELIMITER, char))
            // operator
            else if(this.isOperator(char))
                tokens.push(new token(token.types.OPERATOR, char))
            // number
            else if(this.isDigit(char))
                tokens.push(new token(token.types.NUMBER, this.__walkNumber__()))
            // string
            else if(char == '\'')
                tokens.push(new token(token.types.STRING, this.__walkString__()))
            // word
            else if(this.isLetter(ch))
                tokens.push(new token(token.types.KEYWORD, this.__walkWord__()))
            // separator: TODO

            this.cursor++
        }
    }

    __walkNumber__() {
        let final = this.source[this.cursor]
        // walk until is digit
        return final
    }

    __walkString__() {
        let final = this.source[this.cursor]
        // walk until ' or eof(error then)
        return final
    }

    __walkWord__() {
        let final = this.source[this.cursor]
        //walk while is letter or _
        return final
    }
}
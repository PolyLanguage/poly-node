import lexer from "./lib/lexer";

// Source code
let code = `
    print('hello')
`

// Lexer
const lexer = new lexer(code)
lexer.walk()


// Parser

// Interpreter
module.exports = {
    root   : true,
    env    : { node: true },
    parser : '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        'array-bracket-spacing': 'error',
        'arrow-parens'         : [
            'error',
            'as-needed'
        ],
        'arrow-spacing': [
            'error',
            { before: true,
                after : true }
        ],
        'block-spacing'     : 'error',
        'brace-style'       : 'error',
        'comma-dangle'      : 'error',
        'comma-spacing'     : 'error',
        'comma-style'       : 'error',
        curly               : 'error',
        eqeqeq              : ['error', 'always'],
        'eol-last'          : ['error', 'always'],
        'func-call-spacing' : ['error', 'never'],
        'func-name-matching': ['error', 'always'],
        'func-style'        : [
            'error',
            'declaration',
            { allowArrowFunctions: true }
        ],
        'implicit-arrow-linebreak': ['error', 'beside'],
        indent                    : [
            'error',
            4,
            { FunctionExpression: { parameters: 'first' },
                ArrayExpression   : 1,
                ObjectExpression  : 1 }
        ],
        'key-spacing': [
            'error',
            { align      : 'colon',
                beforeColon: false,
                afterColon : true }
        ],
        'keyword-spacing': ['error', { before: true }],
        'max-depth'      : ['error', 5],
        'max-len'        : [
            'error',
            170
        ],
        'no-multiple-empty-lines': [
            'error',
            { max: 1 }
        ],
        'no-confusing-arrow'              : 'error',
        'no-duplicate-imports'            : 'error',
        'no-useless-rename'               : 'error',
        'no-nested-ternary'               : 'error',
        'no-trailing-spaces'              : 'error',
        'no-unneeded-ternary'             : 'error',
        'nonblock-statement-body-position': 'error',
        'no-extra-parens'                 : 'error',
        'no-template-curly-in-string'     : 'error',
        'no-fallthrough'                  : 'error',
        'no-lone-blocks'                  : 'error',
        'no-loop-func'                    : 'error',
        'no-multi-spaces'                 : [
            'error',
            { exceptions: { Property: true } }
        ],
        'no-return-assign'            : 'error',
        'no-unmodified-loop-condition': 'error',
        'no-useless-return'           : 'error',
        'no-unused-vars'              : 'error',
        'no-var'                      : 'error',
        'object-shorthand'            : ['error', 'always', { avoidQuotes: true }],
        'object-curly-spacing'        : ['error', 'always'],
        'object-curly-newline'        : ['error', { minProperties: 5 }],
        'padded-blocks'               : [
            'error',
            'never'
        ],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always',
                prev     : '*',
                next     : 'return' },
            { blankLine: 'always',
                prev     : '*',
                next     : 'function' },
            { blankLine: 'always',
                prev     : 'function',
                next     : '*' }
        ],
        'prefer-spread'  : 'error',
        'prefer-const'   : ['error', { destructuring: 'all' }],
        'prefer-template': 'error',
        'quote-props'    : [
            'error',
            'as-needed'
        ],
        quotes: [
            'error',
            'single'
        ],
        'require-await': 'error',
        semi           : [
            'error',
            'always'
        ],
        'semi-spacing'               : 'error',
        'semi-style'                 : 'error',
        'space-before-function-paren': ['error', 'never'],
        'space-in-parens'            : [
            'error',
            'never'
        ]
    }
};

var marked = require('marked')

module.exports= function(Twig) {

  Twig.exports.extendTag({

    type: 'markdown',
    regex: /^markdown$/,
    next: ['endmarkdown'],
    open: true,

    compile: function (token) {

      var expression = token.match[0];

      // Compile the expression. (turns the string into tokens)
      token.stack = Twig.expression.compile.apply(this, [{
        type:  Twig.expression.type.expression,
        value: expression
      }]).stack;

      delete token.match;
      return token;
    },

    parse: function (token, context, chain) {

      var level = Twig.expression.parse.apply(this, [token.stack, context]),
        output = "";

      output = marked(token.output[0].value)

      return {
        chain: chain,
        output: output
      };
    }

  })

  Twig.exports.extendTag({
    type: "endmarkdown",
    regex: /^endmarkdown$/,
    next: [ ],
    open: false
  });

}
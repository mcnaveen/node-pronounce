const nlp = require('compromise');
const nlpPronounce = require('compromise-pronounce');
nlp.extend(nlpPronounce);

function pronounce(text) {
  return nlp(text).pronounce().map(o => o.pronounce).toString();
}

module.exports.pronounce = pronounce;
import nlp from 'compromise';
import speechPlugin from 'compromise-speech'
nlp.plugin(speechPlugin)

function pronounce(pronounceWord) {
  let word = nlp(pronounceWord);
  let speechWord = decodeURI(word.terms().soundsLike());
  return speechWord;
}

const _pronounce = pronounce;
export { _pronounce as pronounce };
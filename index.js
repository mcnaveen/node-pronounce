import nlp from 'compromise';
import speechPlugin from 'compromise-speech'
nlp.plugin(speechPlugin)

function pronounce(pronounceWord) {
  let word = nlp(pronounceWord);
  let spechWord = decodeURI(word.terms().soundsLike());
  return spechWord;
}

const _pronounce = pronounce;
export { _pronounce as pronounce };
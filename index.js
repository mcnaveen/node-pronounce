import nlp from 'compromise';
import speechPlugin from 'compromise-speech'
nlp.plugin(speechPlugin)

function pronounce(pronounceword) {
  let doc = nlp(pronounceword);
  let spechword = decodeURI(doc.terms().soundsLike());
  return spechword;
}

const _pronounce = pronounce;
export { _pronounce as pronounce };
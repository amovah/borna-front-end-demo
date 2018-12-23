const persianNumbers = '۰۱۲۳۴۵۶۷۸۹';
const engNumbers = '0123456789';

export function enToFa(text) {
  return text.split('').map((letter) => {
    const i = engNumbers.indexOf(letter);
    if (i >= 0) {
      return persianNumbers[i];
    }

    return letter;
  }).join('');
}

export function faToEn(text) {
  return text.split('').map((letter) => {
    const i = persianNumbers.indexOf(letter);
    if (i >= 0) {
      return engNumbers[i];
    }

    return letter;
  }).join('');
}

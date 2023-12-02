export default function caesarCipher(text, shift = 0) {
  if (text === undefined) throw new Error("Function expects a text to cipher");
  if (shift === 0) return text;
  else if (shift < 0 || shift > 25)
    throw new Error("shift factor out of range");

  const lowerCaseAlphabetArray = getLowerCaseAlphabetArray();
  const upperCaseALphabetArray = getUpperCaseAlphabetArray();
  const lowerCaseCipher = [
    ...lowerCaseAlphabetArray.slice(shift),
    ...lowerCaseAlphabetArray.slice(0, shift),
  ];
  const upperCaseCipher = [
    ...upperCaseALphabetArray.slice(shift),
    ...upperCaseALphabetArray.slice(0, shift),
  ];
  const cipherText = encryptText(text, lowerCaseCipher, upperCaseCipher);
  return cipherText;
}

function encryptText(text, lowerCaseCipher, upperCaseCipher) {
  const lowerCaseAlphabetArray = getLowerCaseAlphabetArray();
  const upperCaseALphabetArray = getUpperCaseAlphabetArray();
  const splitChars = text.split("");
  splitChars.forEach((char, index) => {
    const lowerCaseAlphabetIndex = lowerCaseAlphabetArray.findIndex(
      (alphabet) => alphabet === char
    );
    const upperCaseALphabetIndex = upperCaseALphabetArray.findIndex(
      (alphabet) => alphabet === char
    );
    if (lowerCaseAlphabetIndex !== -1)
      splitChars[index] = lowerCaseCipher[lowerCaseAlphabetIndex];
    if (upperCaseALphabetIndex !== -1)
      splitChars[index] = upperCaseCipher[upperCaseALphabetIndex];
  });
  return splitChars.join("");
}

function getLowerCaseAlphabetArray() {
  return [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
}

function getUpperCaseAlphabetArray() {
  return [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
}

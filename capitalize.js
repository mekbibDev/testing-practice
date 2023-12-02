export function capitalize(string) {
  const trimmedString = string.trim();
  const capitalizedLetter = trimmedString.charAt(0).toLocaleUpperCase();
  const splittedString = trimmedString.split("");
  splittedString[0] = capitalizedLetter;
  const joinedString = splittedString.join("");

  return joinedString;
}

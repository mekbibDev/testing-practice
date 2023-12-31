export function capitalize(string) {
  if (string === undefined) throw new Error("Capitalize expects an argument");
  const trimmedString = string.trim();
  const capitalizedLetter = trimmedString.charAt(0).toLocaleUpperCase();
  const splittedString = trimmedString.split("");
  splittedString[0] = capitalizedLetter;
  const joinedString = splittedString.join("");

  return joinedString;
}

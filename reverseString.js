export default function reverseString(string) {
  const trimmedString = string.trim();
  const splittedChars = trimmedString.split("");
  const reversedChars = splittedChars.reverse();
  const joinedChars = reversedChars.join("");
  return joinedChars;
}

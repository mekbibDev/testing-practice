export default function reverseString(string) {
  if (string === undefined)
    throw new Error("Reverse String expects an argument");
  const trimmedString = string.trim();
  const splittedChars = trimmedString.split("");
  const reversedChars = splittedChars.reverse();
  const joinedChars = reversedChars.join("");
  return joinedChars;
}

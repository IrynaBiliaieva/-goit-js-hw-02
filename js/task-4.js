function formatString(string, maxLength = 40) {
  // Write code under this line

  const newString =
    string.length > maxLength ? string.substr(0, maxLength) + `...` : string;
  let newString = "";
  if (string.length > maxLength) {
    newString = string.substr(0, maxLength) + `...`;
  } else {
    newString = string;
  }

  return newString;
}

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
);
// 'Vestibulum facilisis, purus ne...'

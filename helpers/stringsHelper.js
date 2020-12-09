export const titleize = (string, separator) => {
  if (separator) {
    string = string.split(separator);
  } else {
    string = string.split(' ');
  }
  const titleized = []
  for (const word of string) {
    
    titleized.push(capitalize(word))
  }

  return titleized.join(' ')

};

export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
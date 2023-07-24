function getMinMax(str) {
  let arr = str
    .split(' ')
    .map(it => parseFloat(it))
    .filter(it => !isNaN(it))
    .sort((a, b) => a - b);

  return {
    min: arr[0],
    max: arr[arr.length - 1],
  };
}


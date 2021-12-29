const matrix = [
  [6, 2, 1],
  [5, 4, 9],
  [3, 8, 7],
];

function getSpiralPath(matrix) {
  const a = [];

  a.push(matrix[0][0]);
  a.push(matrix[1][0]);
  a.push(matrix[2][0]);
  a.push(matrix[2][1]);
  a.push(matrix[2][2]);
  a.push(matrix[1][2]);
  a.push(matrix[0][2]);
  a.push(matrix[0][1]);
  a.push(matrix[1][1]);

  return a;
}

console.log(getSpiralPath(matrix));

//②

const format = "bbitaaa";
const format = "abbccccaabc";

const getString = (format) => {
  let answer = "";
  for (let i = 0; i < format.length; i++) {
    const a = format.charAt(0 + i);
    const b = format.charAt(1 + i);
    if (a === b) {
      format.replace(/^a/, "");
    } else {
      answer += a;
    }
  }
  return answer;
};

console.log(getString("abbccccaabc"));
console.log(getString("bbitaaa"));

////①

function shortest(str) {
  const minWord = str.split(" ").sort(function (a, b) {
    return a.length - b.length;
  });
  return minWord[0].length;
}

console.log(shortest("red blue yellow green"));

function findUniqueNumber(array) {
  const onlyNumber = array.filter(function (item, i, items) {
    return items.indexOf(item) === items.lastIndexOf(item);
  });
  return onlyNumber[0];
}

console.log(findUniqueNumber([1, 5, 1, 1, 1, 1]));
console.log(findUniqueNumber([0, 0, 0, 3]));

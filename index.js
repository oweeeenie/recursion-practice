// iterative version (commented out)

/*function fibs(num) {
  const array = [0, 1];

  if (num <= 0) {
    return [];
  }

  if (num === 1) {
    return [0];
  }

  for (let i = 2; i < num; i++) {
    const nextNumber = array[array.length - 1] + array[array.length - 2];
    array.push(nextNumber);
  }
  return array;
}

console.log(fibs(5));



// recursive version (commented out)
function fibsRec(num) {
  if (num === 0) return 0;

  if (num === 1) return 1;

  if (num > 1) {
    let previousValueOne = fibsRec(num - 1);
    let previousValueTwo = fibsRec(num - 2);

    return previousValueOne + previousValueTwo;
  }
  return;
}

console.log(fibsRec(10));
*/

// MERGE SORT LOGIC (not commented out)
function mergeSort(array) {
  if (array.length === 0) {
    return array;
  }

  if (array.length === 1) {
    return array;
  }

  if (array.length > 1) {
    let middleIndex = Math.floor(array.length / 2);
    let firstSplit = array.slice(0, middleIndex);
    let secondSplit = array.slice(middleIndex);

    firstSplit = mergeSort(firstSplit);
    secondSplit = mergeSort(secondSplit);
    let i = 0;
    let j = 0;

    let arrayResult = [];

    while (i < firstSplit.length && j < secondSplit.length) {
      if (firstSplit[i] < secondSplit[j]) {
        arrayResult.push(firstSplit[i]);
        i++;
      } else {
        arrayResult.push(secondSplit[j]);
        j++;
      }
    }

    while (i < firstSplit.length) {
      arrayResult.push(firstSplit[i]);
      i++;
    }

    while (j < secondSplit.length) {
      arrayResult.push(secondSplit[j]);
      j++;
    }

    return arrayResult;
  }
}

// mergeSort test example
const unsortedArray1 = [3, 2, 1, 13, 8, 5, 0, 1];
const unsortedArray2 = [105, 79, 100, 110];

console.log(mergeSort(unsortedArray1)); // Expected output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort(unsortedArray2)); // Expected output: [79, 100, 105, 110]

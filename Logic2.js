const numberOfBus = (totalFamily, memberFamily) => {
  if (totalFamily !== memberFamily.length) {
    return "Input must be equal with count of family";
  }

  memberFamily.sort(function (a, b) {
    b - a;
  });

  let bus = 0;
  let i = 0;
  let j = memberFamily.length - 1;

  while (i <= j) {
    if (memberFamily[i] + memberFamily[j] <= 4) {
      j--;
    }
    i++;
    bus++;
  }

  return bus;
};

const total = 5;
const memberFamily = [1, 2, 4, 3, 3];
console.log(numberOfBus(total, memberFamily));

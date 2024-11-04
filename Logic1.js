const shortChar = (params) => {
  const vowel = ["a", "i", "u", "e", "o"];
  const breakParam = params
    .toLowerCase()
    .split("")
    .filter((char) => char !== " ");

  const vowelChar = breakParam.filter((elements) => vowel.includes(elements));
  const consonantChar = breakParam.filter(
    (elements) => !vowel.includes(elements)
  );
  console.log("Vowel Characters : " + vowelChar.join(""));
  console.log("Consonant Characters : " + consonantChar.join(""));
};

shortChar("Hallo Gallant");

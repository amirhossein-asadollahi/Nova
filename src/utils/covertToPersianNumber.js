const convertToPersianNumber = (number, isCurrency = false) => {
  const numberToArr = number.split("");
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const convertedChars = numberToArr.map((num) => {
    const findEnglish = englishNumbers.findIndex((e) => e === num);
    if (findEnglish === -1) {
      return num;
    }

    return persianNumbers[findEnglish];
  });
  const convertedValue = convertedChars.join("");
  const convertedCurrency = convertedValue.toLocaleString("fa-IR");
  return isCurrency ? convertedCurrency : convertedValue;
};

export default convertToPersianNumber;

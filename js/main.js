//-----------------------------------------------------------------------
// Program: numberToWord.js
// Author: 'Manuj Gogoi'
// Date: 13-08-2021
// Reference: "GagMansa- Learn Java" youTube channel.
//-----------------------------------------------------------------------

// This function converts a number (between 1 to 99999999999999) to a string
// This is a recursive function.
const convert = (num) => {
  let str = "";
  let sd = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let dd = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  if (num < 20) {
    str = sd[num];
  } else if (num < 100) {
    str = dd[Math.floor(num / 10)] + " " + sd[num % 10];
  } else if (num < 1000) {
    str = convert(Math.floor(num / 100)) + " hundred " + convert(num % 100);
  } else if (num < 100000) {
    str = convert(Math.floor(num / 1000)) + " thousand " + convert(num % 1000);
  } else if (num < 10000000) {
    str = convert(Math.floor(num / 100000)) + " lakh " + convert(num % 100000);
  } else if (num < 100000000000000) {
    str =
      convert(Math.floor(num / 10000000)) + " crore " + convert(num % 10000000);
  } else {
    str = "overflow";
  }
  return str;
};

// This is a wrapper function which receives a number and
// send this number to convert function for word conversion
// It trims all extra spaces from the returned string and
// then return final output.
const numberToWord = (num) => {
  str = convert(num);
  return str.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ");
};

// import plural from "./_plural";
import plural from "js-plural-ru";

const a = [
  "",
  "один",
  "два",
  "три",
  "четыре",
  "пять",
  "шесть",
  "семь",
  "восемь",
  "девять",
  "десять",
  "одиннадцать",
  "двенадцать",
  "тринадцать",
  "четырнадцать",
  "пятнадцать",
  "шестнадцать",
  "семнадцать",
  "восемнадцать",
  "девятнадцать",
];

const b = [
  "",
  "",
  "двадцать",
  "тридцать",
  "сорок",
  "пятьдесят",
  "шестьдесят",
  "семьдесят",
  "восемьдесят",
  "девяносто",
];

const c = [
  "",
  "сто",
  "двести",
  "триста",
  "четыреста",
  "пятьсот",
  "шестьсот",
  "семьсот",
  "восемьсот",
  "девятьсот",
];

const replaces = [
  ["один тысяча", "одна тысяча"],
  ["два тысячи", "две тысячи"],
];

const degrees = [
  [],
  ["тысяча", "тысячи", "тысяч"],
  ["миллион", "миллиона", "миллионов"],
  ["миллиард", "миллиарда", "миллиардов"],
  ["биллион", "биллиона", "биллионов"],
  ["биллиард", "биллиарда", "биллиардов"],
  ["триллион", "триллиона", "триллионов"],
  ["триллиард", "триллиарда", "триллиардов"],
];

const getLT20 = (n) => a[Number(n)],
  getGT20 = (n) => [b[n[0]], a[n[1]]].join(" "),
  getGT99 = (n) =>
    [c[n[0]], getLT20(n.slice(1)) || getGT20(n.slice(1))].join(" "),
  getN = (n, i) => [getGT99(n), plural(n, degrees[i])].join(" "),
  regex = /(\d{3})/g;

export default (input) => {
  const num = Number(input);

  if (isNaN(num)) {
    return "";
  }

  if (num === 0) {
    return "ноль";
  }

  console.log([
    ...`00${num}`
      .slice(`00${num}`.length % 3)
      .slice(degrees.length * -3)
      .matchAll(regex),
  ]);

  const matches = [
    ...`00${num}`
      .slice(`00${num}`.length % 3)
      .slice(degrees.length * -3)
      .matchAll(regex),
  ]
    .reverse()
    .map((e, i) => getN(e[0], i))
    .reverse();

  console.log(matches);

  return matches.join(" ").trim();
};

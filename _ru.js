const lt20 = [
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

const gte20 = [
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

const gte100 = [
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
  //   ["триллиард", "триллиарда", "триллиардов"],
];

export { lt20, gte20, gte100, replaces, degrees };
// import plural from "./_plural";
import plural from "js-plural-ru";
import { lt20, gte20, gte100, degrees } from "./_ru";

const getLT20 = (n) => lt20[Number(n)],
  getGTE20 = (n) => [gte20[n[0]], lt20[n[1]]].join(" "),
  getGTE100 = (n) =>
    [gte100[n[0]], getLT20(n.slice(1)) || getGTE20(n.slice(1))].join(" "),
  getN = (n, i) => [getGTE100(n), plural(n, degrees[i])].join(" "),
  regex = /(\d{3})/g;

export default (input) => {
  const num = Number(input);

  if (isNaN(num)) {
    return "";
  }

  // if (number > INPUT_VALUE_LIMIT) {
  //   return undefined
  // }

  // Number.MAX_SAFE_INTEGER;

  if (num === 0) {
    return "ноль";
  }

  const str = `00${num}`;

  return str
    .slice(str.length % 3)
    .match(regex)
    .reverse()
    .map(getN)
    .reverse()
    .join(" ")
    .trim()
    .replace(/\s{2,}/, " ");
};

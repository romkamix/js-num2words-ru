export default (count, words) => {
    if (words.length !== 3) {
      return "";
    }
  
    count = Math.abs(count) % 100;
  
    if (count > 10 && count < 20) {
      return words[2];
    }
  
    const rest = count % 10;
  
    if (rest > 1 && rest < 5) {
      return words[1];
    }
  
    if (rest === 1) {
      return words[0];
    }
  
    return words[2];
  };
  
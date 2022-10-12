/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const numerals = {
        CM:900,
        CD:400,
        XC:90,
        XL:40,
        IX:9,
        IV:4,
        M:1000,
        D:500,
        C:100,
        L:50,
        X:10,
        V:5,
        I:1
    }

    let result = 0

    for(let key in numerals){
       while(s.includes(key)){
          result += numerals[key]
          s = s.replace(key, '')
        }
    }
  return result
};

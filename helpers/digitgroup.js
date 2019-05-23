module.exports = number => {
  var num2Str = String(number);
    var firstDigit = num2Str.length % 3 === 0 ? 3 : num2Str.length % 3 ;
    var money = firstDigit === 3 ? num2Str.substring(0, 3) : num2Str.substring(0,firstDigit);

    
    for (var i = firstDigit; i < num2Str.length; i+=3) {
        money += '.' + num2Str.substring(i, i + 3);
    }
    return 'Rp.' + money + ',00';
}
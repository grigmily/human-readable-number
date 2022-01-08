module.exports = function toReadable (number) {
    let names = ['zero', 'one', 'two', 'three','four','five','six','seven','eight','nine','ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen','eighteen','nineteen',''];
    let decade = ['twenty', 'thirty', 'forty','fifty','sixty','seventy','eighty','ninety'];
    if (number < 20) return (names[number]);
    else if (number < 100) return ((number % 10) ? (decade[(Math.floor(number/10)-2)]+' '+names[(number % 10)||20]) : decade[(Math.floor(number/10)-2)]);
    else if (number < 1000) return ((number % 100) ? (names[Math.floor(number/100)])+' hundred ' + (toReadable(number % 100)) : ((names[Math.floor(number/100)])+' hundred'));
}   
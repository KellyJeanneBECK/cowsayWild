const information = require('./information');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `${information.studentName} is on ${information.campus}`,
    e : "oO",
    T : "U "
}));
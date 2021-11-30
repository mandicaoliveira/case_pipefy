const { getHour, getMinute } = require("./utils");

const name = "Amanda Oliveira"
const email = "oliveiraamanda91@gmail.com"
const wantWorkDescrption = "I would like to work at Pipefy because when researching the company I noticed that there is a lot of opportunity for growth and to add to the processes my knowledge developed so far. People seem to be nice and the people sector demonstrates that they care about the well-being of employees."
const hour = getHour();
const minute = getMinute();

module.exports = {
    name, wantWorkDescrption, hour, minute,email
}
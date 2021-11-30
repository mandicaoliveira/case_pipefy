function getHour() {
    const d = new Date();
    let value = d.getUTCHours();
    if (value<10) return "0"+value;
    return value;
};
function getMinute() {
    const d = new Date();
    let value = d.getUTCMinutes();
    if (value<10) return "0"+value;
    return value;
}; 

module.exports = {
    getHour, getMinute
}
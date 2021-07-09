// time
function passingTime(id) {
    const time = new Date();

    h = time.getHours();
    m = time.getMinutes();
    s = time.getSeconds();

    if (h < 10) {
        h = '0' + h;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }

    document.getElementById('h').innerHTML = h;
    document.getElementById('m').innerHTML = m;
    document.getElementById('s').innerHTML = s;
    setTimeout('passingTime()', '1000');

    return true;
}
window.onload = passingTime();

// day
function passingDay(id) {
    const day = new Date();

    y = day.getFullYear().toString().slice(-2);
    mt = day.getMonth() + 1;
    d = day.getDate();

    if (y < 10) {
        y = '0' + y;
    }
    if (mt < 10) {
        mt = '0' + mt;
    }
    if (d < 10) {
        d = '0' + d;
    }

    document.getElementById('y').innerHTML = y;
    document.getElementById('mt').innerHTML = mt;
    document.getElementById('d').innerHTML = d;
    setTimeout('passingDay()', '1000');

    return true;
}
window.onload = passingDay();


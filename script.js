const hour = document.getElementById('hour-hand-container');
const minute = document.getElementById('minute-hand-container');
const second = document.getElementById('second-hand-container');
setInterval(function(){
    let day = new Date;
    let sc = day.getSeconds()*6;
    let mn = (day.getMinutes()*6)+(sc/60);
    let hh = (day.getHours()*30)+(mn/12);
    hour.style.transform = `rotateZ(${hh}deg)`;
    minute.style.transform = `rotateZ(${mn}deg)`;
    second.style.transform = `rotateZ(${sc}deg)`;
}, 100);
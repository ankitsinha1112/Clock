setInterval(() => {
    let x= new Date();
    let hr=x.getHours();
    let min=x.getMinutes();
    let s=x.getSeconds();
    let hrot=30*hr+min/2;
    let mrot=6*min;
    let srot=6*s;
    hour.style.transform = `rotate(${hrot}deg)`;
    minute.style.transform = `rotate(${mrot}deg)`;
    second.style.transform = `rotate(${srot}deg)`;
}, 1000);
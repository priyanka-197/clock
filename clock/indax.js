setInterval(() => {
 d = new Date()
 htime = d.getHours();
 mtime = d.getMinutes();
 stime = d.getSeconds();
hrotation = 30*htime + mtime/2;
mrotation = 6*mtime;
srotation = 6*stime;
 hour.style.transform = `rotate(${hrotation}deg)` 
 minute.style.transform = `rotate(${mrotation}deg)` 
 second.style.transform = `rotate(${srotation}deg)` 
}
,1000);
setInterval(() => {
    date = new Date().toString();
    htime = d.getHours()
    mtime = d.getMinutes()
    stime = d.getSeconds();
    document.getElementById('c1').innerHTML = htime + " "+ ":";
    document.getElementById('c2').innerHTML = mtime + " " + ":";
    document.getElementById('c3').innerHTML = stime;
}, 1000);

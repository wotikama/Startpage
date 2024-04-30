window.onload = displayClock();
function displayClock() {
    const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

    // Set to true to use a 12 hour date format
    let format_12hour = false;

    let d = new Date();
    let mm = monthNames[d.getMonth()];
    let dd = d.getDate();
    let min = (mins = ('0' + d.getMinutes()).slice(-2));
    let hh = d.getHours();
    let ampm = '';
    
    if (format_12hour) {
        ampm = hh >= 12 ? ' pm' : ' am';
        hh = hh % 12;
        hh = hh ? hh : 12; //show mod 0 as 12
    }
  
    document.querySelector('.js-hour').innerText = hh;
    document.querySelector('.js-minutes').innerText = min + ampm;

    document.querySelector('.js-month').innerText = mm;
    document.querySelector('.js-day').innerText = dd;

    setTimeout(displayClock, 1000);
}

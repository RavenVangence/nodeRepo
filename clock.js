let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
let dayOfTheWeek = document.querySelector('#day-of-the-week');
let day = document.querySelector('#day');
let month = document.querySelector('#month');
let year = document.querySelector('#year');

setInterval(() => {
    let dateUpdate = new Date();

    // Hourly interval ****************************

        let thingHours = dateUpdate.getHours();
        if (thingHours <= 9) {
            hours.innerText = '0' + dateUpdate.getHours() + '  :';
        }
        else {
            hours.innerText = dateUpdate.getHours() + '  :';
        }
    
    // Minute Interval ****************************
        let thingMinutes = dateUpdate.getMinutes();

        if (thingMinutes <= 9) {
            minutes.innerText = '0' + dateUpdate.getMinutes() + ' :';
        } else {
            minutes.innerText = dateUpdate.getMinutes() + '  :';
        }
    // Seconds Interval ***************************
        let thingSeconds = dateUpdate.getSeconds();

        if (thingSeconds <= 9) {
            seconds.innerText = '0' + dateUpdate.getSeconds();
        } else {
            seconds.innerText = dateUpdate.getSeconds();
        }

    // Day Of The Week ****************************

        if (dateUpdate.getDay() === 0) {
           dayOfTheWeek.innerText = 'Sunday';
        } else if (dateUpdate.getDay() === 1) {
            dayOfTheWeek.innerText = 'Monday';
        }else if (dateUpdate.getDay() === 2) {
            dayOfTheWeek.innerText = 'Tuesday';
        } else if (dateUpdate.getDay() === 3) {
            dayOfTheWeek.innerText = 'Wednesday';
        } else if (dateUpdate.getDay() === 4) {
            dayOfTheWeek.innerText = 'Thursday';
        } else if (dateUpdate.getDay() === 5) {
            dayOfTheWeek.innerText = 'Friday';
        } else if (dateUpdate.getDay() === 6) {
            dayOfTheWeek.innerText = 'Saturday';
        } else {
                dayOfTheWeek.innerText = 'Day Of The Week Goes Here';
            }

    // Day, Month, Year and a lot of other stuff
    // Day

    if (dateUpdate.getDate() <= 09) {
        day.innerText = '0' + dateUpdate.getDate();
    } else {
        day.innerText = dateUpdate.getDate();
    }
    //  Month

    if (dateUpdate.getMonth() === 0) {
        month.innerText = 'January';
    } else if (dateUpdate.getMonth() === 1) {
        month.innerText = 'February';
    } else if (dateUpdate.getMonth() === 2) {
        month.innerText = 'March';
    } else if (dateUpdate.getMonth() === 3) {
        month.innerText = 'April';
    } else if (dateUpdate.getMonth() === 4) {
        month.innerText = 'May';
    } else if (dateUpdate.getMonth() === 5) {
        month.innerText = 'June';
    } else if (dateUpdate.getMonth() === 6) {
        month.innerText = 'July';
    } else if (dateUpdate.getMonth() === 7) {
        month.innerText = 'August';
    } else if (dateUpdate.getMonth() === 8) {
        month.innerText = 'September';
    } else if (dateUpdate.getMonth() === 9) {
        month.innerText = 'October';
    } else if (dateUpdate.getMonth() === 10) {
        month.innerText = 'November)';
    } else if (dateUpdate.getMonth() === 11) {
        month.innerText = 'December';
    } else {
        month.innerText = 'Month Goes here with other stuff';
    }

    // Full Year ***************************
        year.innerText = dateUpdate.getFullYear();

    
}, 1000);
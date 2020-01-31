const moment = require('moment')

var monthMap = {
    0: 'Janurary',
    1: 'Feburary',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
}
var addObject = function(obj, key) {
    if (!obj[key]) {
        obj[key] = {}
    }
}

var weekOfMonth = function(previousWeekOfMonth, dayOfMonth, dayOfWeek) {
    if (dayOfMonth === 1) {
        return 0
    } else if (dayOfWeek === 0) {
        return previousWeekOfMonth + 1
    } else {
        return previousWeekOfMonth
    }
}

var initalizeCalendarForMonth = function() {
    
    const initialCalendar = []
    for (let i = 0; i < 6; i++) {
        let emptyWeek = new Array(7).fill(null)
        initialCalendar.push(emptyWeek)

    }
    return initialCalendar
}

var generateCalendar = function() {
    const calendar = {}
    let currentDate = moment('01/01/2020');
    let previousWeekOfMonth = 0;
    for (let i = 0; i < 300; i++) {
        let year = currentDate.year()
        addObject(calendar, year)
        let month = currentDate.month()
        addObject(calendar[year], month)
        let dayOfMonth = parseInt(currentDate.format('D'))
        if (dayOfMonth === 1) {
            calendar[year][month].calendar = initalizeCalendarForMonth()
        }
        let dayOfWeek = currentDate.day()
        let currentWeekOfMonth = weekOfMonth(previousWeekOfMonth, dayOfMonth, dayOfWeek)
        calendar[year][month][dayOfMonth] = {
            dayOfMonth : dayOfMonth, 
            dayOfWeek: dayOfWeek, 
            weekOfMonth: currentWeekOfMonth
            }
        calendar[year][month].calendar[currentWeekOfMonth][dayOfWeek] = {dayOfMonth: dayOfMonth, date: currentDate.format('l')}
        currentDate.add(1, 'day')
        previousWeekOfMonth = currentWeekOfMonth
    }
return calendar 
}

var bookDays = function(calendar, bookedDays) {
    if (!bookedDays) {
        return
    }
    for (let bookedDay in bookedDays) {
        wrappedBookedDay = moment(bookedDay)
        let year = wrappedBookedDay.year()
        let month = wrappedBookedDay.month()
        let dayOfMonth = parseInt(wrappedBookedDay.format('D'))
        let weekOfMonth = calendar[year][month][dayOfMonth].weekOfMonth
        let dayOfWeek = calendar[year][month][dayOfMonth].dayOfWeek
        // calendar[year][month][dayOfMonth].isBooked = true;
        calendar[year][month].calendar[weekOfMonth][dayOfWeek].isBooked = true;
        console.log(calendar[year][month].calendar[weekOfMonth][dayOfWeek].isBooked)
    }
}


// var newCalendar = generateCalendar()
// console.log(bookDays(newCalendar, {'01/01/2020': true, '02/02/2020': true}))

// console.log(newCalendar['2020']['0'].calendar['0']['3'].isBooked)

// console.log(newCalendar)

var nextYearAndMonth = function(currentYear, currentMonth) {
    if (currentMonth === 11) {
        currentMonth = 0
        currentYear += 1
    } else {
        currentMonth += 1
    }
    return ({
        year: currentYear,
        month: currentMonth  
    })
}

var flattenCalendar = function(calendar) {
    let year = 2020;
    let month = 0;
    const flattenedCalendar = []
    //bug occurs here when year changes
        while (calendar[year][month]) {
            let calendarInfo = {}
            calendarInfo.year = year
            calendarInfo.month = monthMap[month]
            calendarInfo.calendar = calendar[year][month].calendar
            flattenedCalendar.push(calendarInfo)
            let yearAndMonth = nextYearAndMonth(year, month) 
            year = yearAndMonth.year
            month = yearAndMonth.month
    }
    return flattenedCalendar
}

// var flat = flattenCalendar(newCalendar)

// console.log(flat)



module.exports.generateCalendar = generateCalendar
module.exports.bookDays = bookDays
module.exports.flattenCalendar = flattenCalendar
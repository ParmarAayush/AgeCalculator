var date, month, year, bdate, bmonth, byear, cmonth, cyear, cdate;

function cal() 
{

    var d = new Date();
    bdate = document.getElementById("day").value;
    bmonth = document.getElementById("month").value;
    byear = document.getElementById("year").value;
    cmonth = d.getMonth();
    cdate = d.getDate();
    cyear = d.getFullYear();

    if (cyear > byear) {
        year = cyear - byear;
        document.getElementById("year-out").innerHTML = year;
    } else if (cYear == bYear) {
        year = 0;
        document.getElementById("year-out").innerHTML = year;
    }
    if (cmonth < bmonth) {
        cmonth += 12;
        year -= 1;
        month = cmonth - bmonth;
        document.getElementById("month-out").innerHTML = month + 1;
        document.getElementById("year-out").innerHTML = year;
    } else {
        month = cmonth - bmonth;
        document.getElementById("month-out").innerHTML = month + 1;
    }
    //calculating days
    if (cdate < bdate) {
        cdate += 31;
        month -= 1;
        date = cday - bday;
        document.getElementById("day-0ut").innerHTML = date;
        document.getElementById("month-out").innerHTML = month;

    } else {
        day = cdate - bdate;
        document.getElementById("day-0ut").innerHTML = day;
    }

}

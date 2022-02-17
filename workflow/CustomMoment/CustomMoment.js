(function () {
    class CustomMoment {
        constructor(date) {
            if (typeof date == "number") {
                this.date = new Date(date)
            }
            else this.date = date
        }

        static parse(dateToParse, formatToParse) {
            let result;
            let days = ""
            let months = ""
            let years = ""
            let newArray = []
            let splitArrayDate = ""
            switch (formatToParse) {
                case "DD-MM-YYYY":
                    [days, months, years] = dateToParse.split("-")
                    newArray = [years, months, days]
                    // console.log(Date.parse(arr.join('-')))
                    result = Date.parse(newArray.join('-'))
                    break;

                case "MM-DD-YYYY":
                    [months, days, years] = dateToParse.split("-")
                    newArray = [years, months, days]
                    // console.log(Date.parse(arr.join('-')))
                    result = Date.parse(newArray.join('-'))
                    break;
                case "YYYY-MM-DD":
                    [years, months, days] = dateToParse.split("-")
                    newArray = [years, months, days]
                    // console.log(Date.parse(arr.join('-')))
                    result = Date.parse(newArray.join('-'))
                    break;

                case "MMDDYYYY":
                    splitArrayDate = dateToParse.split('');
                    years = splitArrayDate.slice(4, 8).join('');
                    months = splitArrayDate.slice(0, 2).join('');
                    days = splitArrayDate.slice(2, 4).join('');
                    newArray.push(years);
                    newArray.push(months);
                    newArray.push(days);
                    result = Date.parse(newArray.join('-'))
                    break;
                case "DDMMYYYY":
                    splitArrayDate = dateToParse.split('');
                    years = splitArrayDate.slice(4, 8).join('');
                    days = splitArrayDate.slice(0, 2).join('');
                    months = splitArrayDate.slice(2, 4).join('');
                    newArray.push(years);
                    newArray.push(months);
                    newArray.push(days);
                    result = Date.parse(newArray.join('-'))
                    break;
                case "YYYYMMDD":
                    splitArrayDate = dateToParse.split('');
                    days = splitArrayDate.slice(6, 8).join('');
                    console.log(days)
                    years = splitArrayDate.slice(0, 4).join('');
                    console.log(years)
                    months = splitArrayDate.slice(4, 6).join('');
                    console.log(months)
                    newArray.push(years);
                    newArray.push(months);
                    newArray.push(days);
                    result = Date.parse(newArray.join('-'))
                    break;
                default:
                    console.log(`Wrong!`);
                    return null;
            }
            return new CustomMoment(result);

        }

        format(sample) {
            let formatedDate = this.date;
            let result;
            let days = formatedDate.getDate()
            if (days < 10) {
                days = '0' + months
            }
            let months = formatedDate.getMonth() + 1
            if (months < 10) {
                months = '0' + months
            }
            let years = formatedDate.getFullYear()
            console.log(days, months, years)

            switch (sample) {
                case "DD-MM-YYYY":
                    result = `${days}-${months}-${years}`
                    break;
                case "MM-DD-YYYY":
                    result = `${months}-${days}-${years}`
                    break;
                case "YYYY-MM-DD":
                    result = `${years}-${months}-${days}`
                    break;
                case "DD/MM/YYYY":
                    result = `${days}/${months}/${years}`
                    break;
                case "MM/DD/YYYY":
                    result = `${months}/${days}/${years}`
                    break;
                case "YYYY/MM/DD":
                    result = `${years}/${months}/${days}`
                    break;
                default:
                    console.log(`Wrong!`);
                    return null;
            }
            return result;
        }

        fromNow() {
            let difference = Date.now() - this.date.getTime()

            let diffDays = Math.ceil(difference / (3600 * 24 * 1000));
            let diffMonths = Math.ceil(difference / (3600 * 24 * 1000 * 31));
            let diffYears = Math.ceil(difference / (3600 * 24 * 1000 * 31 * 365));
            let result;
            if (diffMonths > 12) {
                result = `${diffYears} years ago`

            }
            else if (diffDays > 12) {
                result = `${diffMonths} months ago`
            }
            else {
                result = `${diffDays} days ago`
            }

            return result
        }

        toDate() {
            const result = new Date(this.date);
            return result;
        }
    }
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = CustomMoment;
    } else {
        window.CustomMoment = CustomMoment;
    }
})()
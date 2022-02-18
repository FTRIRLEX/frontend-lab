(function () {
    class CustomMoment {
        constructor(date) {

            this.date = (typeof date === "number") ? new Date(date) : date
        }

        static parse(dateToParse, formatToParse) {
            let years = formatToParse.search('YYYY')
            let months = formatToParse.search('MM')
            let days = formatToParse.search('DD')
            years = parseInt(dateToParse.slice(years, years + 4))
            months = parseInt(dateToParse.slice(months, months + 2))
            days = parseInt(dateToParse.slice(days, days + 2))
            let newDate = new Date(years, months - 1, days)
            if(newDate != 'Invalid Date'){
                return new CustomMoment(newDate);
            }
            else return 'ERROR. Invalid Format'

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
            result = sample.replace('YYYY', years)
            result = result.replace('DD', days)
            result = result.replace('MM', months)
            if(!isNaN(parseInt(result))) {
                return result
            }
            else return 'ERROR. Invalid Format'
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
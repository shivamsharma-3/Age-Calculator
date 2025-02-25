function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value) - 1;
    const year = parseInt(document.getElementById('year').value);

    if (!isValidDate(day, month, year)) {
        document.getElementById('result').innerText = "Please enter a valid date.";
        document.getElementById('dayOfWeek').innerText = "";
        document.getElementById('zodiacSign').innerText = "";
        return;
    }

    const birthDate = new Date(year, month, day);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('result').innerText = `Your age is ${age} years.`;

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const birthDay = daysOfWeek[birthDate.getDay()];
    document.getElementById('dayOfWeek').innerText = `You were born on a ${birthDay}.`;

    const zodiacSign = getZodiacSign(day, month + 1);
    document.getElementById('zodiacSign').innerText = `Your Zodiac Sign is ${zodiacSign}.`;
}

function isValidDate(day, month, year) {
    if (month < 0 || month > 11 || day < 1 || year < 1900 || year > 2100) {
        return false;
    }

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month === 1) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            daysInMonth[1] = 29;
        }
    }

    return day <= daysInMonth[month];
}

function clearInputs() {
    document.getElementById('day').value = '';
    document.getElementById('month').value = '';
    document.getElementById('year').value = '';
    document.getElementById('result').innerText = '';
    document.getElementById('dayOfWeek').innerText = '';
    document.getElementById('zodiacSign').innerText = '';
}

function getZodiacSign(day, month) {
    const signs = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
    const lastDays = [19, 18, 20, 19, 20, 20, 22, 22, 21, 22, 21, 21];
    return (day > lastDays[month - 1]) ? signs[month] : signs[month - 1];
}

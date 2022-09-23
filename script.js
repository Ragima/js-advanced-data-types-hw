//1. Объявить список погоды по дням (массив объектов, у которых будет поля id, dayName, date, temperature, etc.)
const days = [
    {
        id: 1,
        dayName: 'Monday',
        date: '12-05-2022',
        temperature: +25.6,
        wind_speed: 2.6,
        humidity: 25,
        description: 'clear sky'
    },
    {
        id: 2,
        dayName: 'Tuesday',
        date: '13-05-2022',
        temperature: +28.6,
        wind_speed: 2.9,
        humidity: 30,
        description: 'clear sky'
    },
    {
        id: 3,
        dayName: 'Wednesday',
        date: '14-05-2022',
        temperature: +21.6,
        wind_speed: 3.0,
        humidity: 15,
        description: 'rainy'
    },
    {
        id: 4,
        dayName: 'Thursday',
        date: '15-05-2022',
        temperature: +29.7,
        wind_speed: 1.5,
        humidity: 30,
        description: 'sunny'
    },
    {
        id: 6,
        dayName: 'Saturday',
        date: '17-05-2022',
        temperature: +30.7,
        wind_speed: 2.5,
        humidity: 32,
        description: 'sunny'
    },
    {
        id: 7,
        dayName: 'Sunday',
        date: '18-05-2022',
        temperature: +32.7,
        wind_speed: 2.3,
        humidity: 33,
        description: 'sunny'
    },
    {
        id: 7,
        dayName: 'Sunday',
        date: '18-05-2022',
        temperature: +32.7,
        wind_speed: 2.3,
        humidity: 33,
        description: 'sunny'
    }
];

//2. Создать функцию, которая будет добавлять день в список
function addDay(day, days) {
    days.push(day)
}

addDay({
    id: 5,
    dayName: 'Friday',
    date: '16-05-2022',
    temperature: +29.6,
    wind_speed: 1.5,
    humidity: 30,
    description: 'sunny'
},
    days);

//3. Создать функцию, которая будет удалять по айди или другому полю погоду из списка

function deleteDay(id, days) {
    const index = days.findIndex(item => item.id === id);
    days.splice(index, 1);
}

// deleteDay(2,days);

//4. Создать функцию, которая будет сортировать список погоды по температуре с указанным порядком

function sortByTemp(sortType, days) {
    if (sortType === 'asc') {
        days.sort((prev, next) => prev.temperature - next.temperature);
    } else {
        days.sort((prev, next) => next.temperature - prev.temperature);
    }
}

sortByTemp('desс', days);

//5. Создать функцию, которая будет вощвращать копию списка , которая содержит погоду только по выходным или рабочим дням

function weekdays(days) {
    return days.filter(item => (item.dayName !== 'Saturday' && item.dayName !== 'Sunday'));
}

function weekends(days) {
    return days.filter(item => (item.dayName === 'Saturday' || item.dayName === 'Sunday'));
}

//6. Создать функцию, которая фильтрует массив по уникальным элементам (получается массив с элементами, которые повторяются только 1 раз [1, 2, 3, 3, 2, 2] -> [1, 2, 3])

const numbers = [10, 20, 30, 40, 10, 20, 50, 10, 20, 40, 122, 100, 122, 100];

function getUniqueNumbers(numbers) {
    let uniqueList = [];
    numbers.map(num => {
        if (uniqueList.includes(num)) {
            return;
        }
        uniqueList.push(num);
    })
    return uniqueList;
}

console.log(getUniqueNumbers(numbers));
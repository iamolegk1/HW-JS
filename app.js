// Задача №1 напиши функцию, которая принимает массив строк. С помощью метода map сформируй новый массив в котором будут только строки размером меньше 4 символов. Новый массив возвращай из функции.

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getNewMonth(data) {
  const newMonth = data.map((month) => {
    if (month.length <= 3) {
      return month;
    }
  });
  return newMonth;
}
console.log(getNewMonth(monthNames));

// Задача №2 напиши функцию, которая принимает массив строк. С помощью метода forEach сформируй новый массив в котором будут только строки размером меньше 5 символов. Новый массив возвращай из функции.

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getResult(data) {
  const newArray = [];
  data.forEach((item) => {
    if (item.length <= 4) {
      newArray.push(item);
    }
  });
  return newArray;
}
console.log(getResult(monthNames));

// Задача №3 напиши функцию, которая принимает массив строк. С помощью метода filter сформируй новый массив в котором будут только строки размером меньше 3 символов. Новый массив возвращай из функции.

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "Ma",
  "Ju",
  "July",
  "Au",
  "September",
  "October",
  "November",
  "December",
];

function filteredMonth(currentValue) {
  const results = currentValue.filter(function (item) {
    if (item.length <= 2) {
      return item;
    }
  });
  return results;
}
console.log(filteredMonth(monthNames));

// - Задача №4 напиши функцию, которая принимает массив объектов. С помощью метода map сформируй новый массив в котором будут только те объекты у которых поле с именем id парное число. Новый массив возвращай из функции.

const arrNumbers = [
  { id: 2 },
  { id: 1 },
  { id: 3 },
  { id: 12 },
  { id: 6 },
  { id: 5 },
  { id: 9 },
  { id: 8 },
  { id: 7 },
  { id: 10 },
  { id: 11 },
  { id: 4 },
];

function pairedArray(data) {
  const changeNumber = [];
  data.map((item) => {
    if (Object.values(item) % 2 == 0) {
      return changeNumber.push(item);
    }
  });
  return changeNumber.map((num) => num.id);
}
console.log(pairedArray(arrNumbers));

// - Задача №5 напиши функцию, которая принимает массив объектов. С помощью метода filter сформируй новый массив в котором будут только те объекты у которых поле с именем id не парное число. Новый массив возвращай из функции.

const arrayNum = [
  { id: 10 },
  { id: 1 },
  { id: 9 },
  { id: 3 },
  { id: 2 },
  { id: 8 },
  { id: 5 },
  { id: 7 },
  { id: 4 },
  { id: 6 },
  { id: 12 },
  { id: 11 },
];

function unpairedArray(data) {
  const changeNumber = [];
  data.filter(function (item) {
    if (Object.values(item) % 2 !== 0) {
      return changeNumber.push(item);
    }
  });
  return changeNumber.map((value) => value.id);
}
console.log(unpairedArray(arrayNum));

/////////////////////////////////////////////////////////////////////////////////////////////////////////

const rec = (string = "", counter = 0, limit = 10) => {
  if (counter >= limit) return;

  console.log(string);
  counter++;

  return rec(string, counter, limit);
};

rec("Oleg", 0, 10);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function degreeRec(num, deg) {
  if (deg != 1) {
    return num * degreeRec(num, deg - 1);
  } else {
    return num;
  }
}

console.log(degreeRec(2, 2));

function degreeRec(num, deg) {
  return deg === 1 ? num : num * degreeRec(num, deg - 1);
}
console.log(degreeRec(2, 2));

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function reverse(s) {
  function rev(s, len, o) {
    return len === 0 ? o : rev(s, --len, (o += s[len]));
  }
  return rev(s, s.length, "");
}

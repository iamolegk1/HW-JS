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

const newMonth = monthNames.map((data) => {
  if (data.length <= 3) {
    return data;
  }
});
console.log(newMonth);

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

const data = [
  { body: "cruiser", power: "150cc", seater: "7 seater"},
  { body: "retro", power: "200cc", seater: "5 seater"},
  { body: "cruiser", power: "300cc", seater: "3 seater"},
  { body: "sports", power: "150cc", seater: "5 seater"},
  { body: "retro", power: "300cc", seater: "3 seater"},
  // { body: "retro", power: "300cc", seater: "5 seater"},
];
let inputData = {};

function filterData(filterObj) {
  for (let key in filterObj) {
    if (inputData[key]) {
      delete filterObj[key];
      delete inputData[key];
    }
  }
  let filteredData = data; 
  inputData = { ...inputData, ...filterObj };
  for (let key in inputData) {
    filteredData = filteredData.filter(item => item[key] === inputData[key]);
  }
  return Object.keys(inputData).length > 0 ? filteredData : [];
}

console.log(filterData({ power: "300cc" }));
console.log(filterData({ body: "retro" }));
console.log(filterData({ power: "300cc" }));



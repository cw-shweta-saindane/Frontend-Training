const data = [
    { body: "cruiser", power: "150cc", seater: "7 seater"},
    { body: "retro", power: "200cc", seater: "5 seater"}, 
    { body: "cruiser", power: "300cc", seater: "3 seater"},
    { body: "sports", power: "150cc",seater: "5 seater"},
    { body: "retro", power: "300cc", seater: "3 seater"} 
  ];

  function filterData(filterObj) {
    let filteredData = [];
    for (let key in filterObj) {
        filteredData = [...filteredData,...data.filter(item => item[key] === filterObj[key])];
    }
  
    return filteredData;
  }


console.log(filterData({power:"300cc",seater:"5 seater"}))
// console.log(filterData({body:"retro"}))


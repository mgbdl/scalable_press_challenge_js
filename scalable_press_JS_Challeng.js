// Helper Function
function currentDate(objDate, duration){
  let clone = new Date(objDate);
  clone.setSeconds(clone.getSeconds() + duration);
  return new Date(
    clone.getTime() - (clone.getTimezoneOffset() * 60000)
  ).toISOString().slice(0, -5); 
}
    
function addBusinessTime({start, end}, time, duration){
  if(time >= start && time <= end){
    return Math.sign(duration) == 1 
      ? currentDate(end, duration)
      : currentDate(start, duration);   
  }
  return currentDate(time, duration);
}

// Christmas 2019, 9pm Dec 24th to 9pm Dec 25th
const holiday = {
  start: new Date('2019-12-24T21:00:00'),
  end:   new Date('2019-12-25T21:00:00')
};

console.log(addBusinessTime(holiday, new Date('2019-12-01T00:00:00'), 60 * 60), '2019-12-01T01:00:00'); 
console.log(addBusinessTime(holiday, new Date('2019-12-24T21:00:00'), 1),       '2019-12-25T21:00:01'); 
console.log(addBusinessTime(holiday, new Date('2019-12-24T20:30:00'), 60 * 60), '2019-12-25T21:30:00');
console.log(addBusinessTime(holiday, new Date('2019-12-25T00:00:00'),  1),       '2019-12-25T21:00:01');
console.log(addBusinessTime(holiday, new Date('2019-12-25T00:00:00'), -1),      '2019-12-24T20:59:59');
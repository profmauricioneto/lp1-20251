let user = {
  name: "mauricio",
  age: 35,
  isProfessor: true,
};

let userJson = JSON.stringify(user);
console.log(user);
console.log(userJson);

console.log(typeof user);
console.log(typeof userJson);

let schedule = `{
    "meetups": [
    { "title": "Conference 1", "date": "2017-11-30T12:00:00.000Z" },
    { "title": "Conference 2", "date": "2017-04-18T12:00:00.000Z" }
    ]
    }`;
schedule = JSON.parse(schedule, function (key, value) {
  if (key == "date") return new Date(value);
  return value;
});
console.log("Date: " + schedule.meetups[1].date);


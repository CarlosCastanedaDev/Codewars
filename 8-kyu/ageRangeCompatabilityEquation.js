/* Everybody knows the classic "half your age plus seven" dating rule that a lot of people follow (including myself). It's the 'recommended' age range in which to date someone.


minimum age <= your age <= maximum age #Task

Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

This equation doesn't work when the age <= 14, so use this equation instead:

min = age - 0.10 * age
max = age + 0.10 * age
You should floor all your answers so that an integer is given instead of a float (which doesn't represent age). Return your answer in the form [min]-[max]

##Examples:

age = 27   =>   20-40
age = 5    =>   4-5
age = 17   =>   15-20 */

function datingRange(age) {
  let min14 = Math.floor(age - 0.1 * age);
  let max14 = Math.floor(age + 0.1 * age);
  let min = Math.floor(age / 2 + 7);
  let max = Math.floor((age - 7) * 2);
  return age <= 14 ? `${min14}-${max14}` : `${min}-${max}`;
}

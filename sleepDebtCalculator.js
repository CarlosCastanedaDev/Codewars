function getSleepHours(day) {
  if (day === 'monday') {
    return 6;
  } else if (day === 'tuesday') {
    return 7;
  } else if (day === 'wednesday') {
    return 7.5;
  } else if (day === 'thursday') {
    return 7.5;
  } else if (day === 'friday') {
    return 7.5;
  } else if (day === 'saturday') {
    return 7.5;
  } else if (day === 'sunday') {
    return 7.5;
  }
}

const getActualSleepHours = () =>
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');

const getIdealSleepHours = () => {
  const idealHours = 7.5;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  const debt = actualSleepHours - idealSleepHours;
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got ${debt} hour(s) more sleep than needed :-/`);
  } else {
    console.log(
      `You should get ${Math.abs(debt)} more hour(s) of sleep a week!`
    );
  }
};

calculateSleepDebt();

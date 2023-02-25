/* Just another day in the world of Minecraft, Steve is getting ready to start his next exciting project -- building a railway system!

Alt text

But first, Steve needs to melt some iron ores in the furnace to get the main building blocks of rails -- iron ingots.ironingot_icon32

Each iron ingot takes 11 seconds* to produce. Steve needs a lot of them, and he has the following fuel options to add into the furnace:

Buckets of lava, each lasts 800 seconds*bucketL
Blaze rod, each lasts 120 secondsblazerod
Coals, each lasts 80 secondscoal
Blocks of Wood, each lasts 15 secondslogs
Sticks, each lasts 1 second*stick
In JavaScript: Write a function calcFuel that calculates the minimum amount of fuel needed to produce a certain number of iron ingots. This function should return an object of the form {lava: 2, blazeRod: 1, coal: 1, wood: 0, stick: 0} */

function calcFuel(n) {
  let seconds = n * 11;
  let remainder = 0;
  let obj = {
    lava: 0,
    blazeRod: 0,
    coal: 0,
    wood: 0,
    stick: 0,
  };

  if (seconds > 800) {
    obj.lava = Math.floor(seconds / 800);
    remainder = seconds % 800;
    seconds = remainder;
  }
  if (seconds > 120) {
    obj.blazeRod = Math.floor(seconds / 120);
    remainder = seconds % 120;
    seconds = remainder;
  }
  if (seconds > 80) {
    obj.coal = Math.floor(seconds / 80);
    remainder = seconds % 80;
    seconds = remainder;
  }
  if (seconds > 15) {
    obj.wood = Math.floor(seconds / 15);
    remainder = seconds % 15;
    seconds = remainder;
  }
  if (seconds >= 1) {
    obj.stick = Math.floor(seconds / 1);
    remainder = seconds % 1;
  }

  return obj;
}

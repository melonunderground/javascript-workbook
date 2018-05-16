'use strict';

let assert = require('assert');

let jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

class CrewMember {
  constructor(name, job, specialSkill) {
    this.name = name;
    this.job = job;
    this.specialSkill = specialSkill;
    this.ship = null;
  }
  printOutName () {
    console.log(this.name)
  }

  enterShip  (ship) {
    this.ship = ship
    ship.crew.push(this)
// console.log(this)

// ship.crew.push(this)
// console.log(ship)
// ship.crew.push(this.name)
// console.log(ship)
// this.ship = ship;
// ship.crew.push(this)
// console.log(ship)
// console.log(ship.crew.push())
// ship.crew.push(this)
// console.log(this)
  }
 }

class Ship {
  constructor(name, type, ability) {
    this.name = name;
    this.type = type;
    this.ability = ability;
    this.crew = []
  }
}

const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
const crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
const mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
console.log(crewMember1.ship)
console.log(mav.crew.length)
 console.log(mav.crew[0])
crewMember1.enterShip(mav)
console.log(crewMember1.ship)
console.log(mav.crew.length)
 console.log(mav.crew[0])
// console.log(crewMember1.ship)
// console.log(crewMember1)
// console.log(crewMember2.printOutName(),crewMember1.name)
// console.log(mav.type)
// console.log(mav.ability)
// console.log(mav.crew.length)


// Your code here
// console.log(crewMember1)
// console.log(crewMember1.name);
// console.log(crewMember1.job);
// console.log(crewMember1.specialSkill);
// console.log(crewMember1.ship);
// crewMember1.enterShip('mav');
// console.log(ship.crew)
// console.log(crewMember1.ship)


  // console.log(mav);
//tests
if (typeof describe === 'function') {
  describe('CrewMember', function() {
    it('should have a name, a job, a specialSkill and ship upon instantiation', function() {
      var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });

    it('can enter a ship', function() {
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });

  describe('Ship', function() {
    it('should have a name, a type, an ability and an empty crew upon instantiation', function() {
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });

    it('can return a mission statement correctly', function() {
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}

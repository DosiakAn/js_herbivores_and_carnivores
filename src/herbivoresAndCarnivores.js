'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100, hidden = false) {
    this.health = health;
    this.name = name;
    this.hidden = hidden;

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }

  unhide() {
    this.hidden = false;
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health, hidden);
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health, hidden);
  }

  bite(target) {
    if (target instanceof Herbivore && target.hidden === false) {
      target.health -= 50;
    }

    if (target.health <= 0 && typeof target.die === 'function') {
      target.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

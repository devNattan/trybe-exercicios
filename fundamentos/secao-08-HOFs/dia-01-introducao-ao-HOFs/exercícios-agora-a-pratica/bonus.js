const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
const battleMembers = { mage, warrior, dragon };

// parte 1
const dragonAttack = (dragon) => {
    const minDmg = 15;
    const maxDmg = Math.floor(Math.random() * dragon.strength);

    const dragonDamg = maxDmg > minDmg ? maxDmg : minDmg;
    return dragonDamg
};
console.log(dragonAttack(dragon));

// parte 2
const warriorAttack = (warrior) => {
    const minDmg = warrior.strength;
    const maxDmg = Math.floor(Math.random() *(minDmg * warrior.weaponDmg));

    const warriorDamg = maxDmg > minDmg ? maxDmg : minDmg;
    return warriorDamg
};
console.log(warriorAttack(warrior));

// parte 3
const mageAttack = (mage) => {
  const mageMana = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  };

  if (mageMana > 15) {
    const mageDmg = maxDmg > minDmg ? maxDmg : minDmg;
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDmg;
    return turnStats;
  }
  return turnStats;
};
console.log(mageAttack(mage));
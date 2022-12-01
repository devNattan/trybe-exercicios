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
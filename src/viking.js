// Soldier
class Soldier {constructor(health,strength){
  this.attack(){
    return strength;
  }
  this.receiveDamage(theDamage){
      health=health-theDamage
  }
}}

// Viking
class Viking extends Soldier{
  constructor(name,health,strength)}{
    super(health,strength);
this.attack()=attack()

}

// Saxon
class Saxon {}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

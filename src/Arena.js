class Arena {
  constructor(size, monsters, hero) {
    this.monsters = monsters;
    this.hero = hero;
    this.size = size;
  }
  getDistance(Fighter1, Fighter2){
    const posX = Math.pow((Fighter2.x - Fighter1.x),2)
    const posY = Math.pow((Fighter2.y - Fighter1.y),2)
    return (Math.sqrt(posX + posY).toFixed(2))
  }
  
  isTouchable(attacker, defender) {
    return this.getDistance(attacker, defender) <= attacker.getRange(defender) ? true : false;
  }
}

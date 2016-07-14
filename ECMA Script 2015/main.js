/*Створюєм клас Fighter*/
class Fighter {
	constructor (...arg) {
		this.name = arg[0];
		this.power = arg[1];
		this.health = arg[2];
	}

	setDamage (damage = 10) {
		this.health = this.health - damage;
		console.log(this.health)
	}

	hit (enemy, point) {
		let damage = point*this.power;
		enemy.setDamage(damage); 
	}
}
/*Створюєм клас ImprovedFighter*/
class ImprovedFighter extends Fighter {
	doubleHit (enemy, point) {
		super.hit(enemy, 2*point)
	}
}
/*Створюєм екземпляри fighter та improvedFighter */
let  name = `
Hercules`;
let fighter = new Fighter (name, 90, 150);
let improvedFighter = new ImprovedFighter ('Zevs', 110, 300);

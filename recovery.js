class DisasterRecovery {
    constructor() {
        this.situations = {};
    }
    addSituation(location, situation) {
        if (!this.situations[location]) {
            this.situations[location] = [];
        }
        this.situations[location].push(situation);
    }
    getSituation(location) {
        return this.situations[location];
    }
}

const drs = new DisasterRecovery();
drs.addSituation("Nairobi", "Fire");
drs.addSituation("Kisumu", "flood");
console.log(drs.getSituation("Nairobi")); 
console.log(drs.getSituation("Kisumu")); 


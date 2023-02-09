class Cliente { 
    name: string;
   

    constructor(name: string) {
        this.name = name;
  
    }
    sumGrades() {
 
    }

    getAverage() {
        return (this.sumGrades()/6)
    }
}
class Item { 
    name: string;
    price: number;
   

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
  
    }
    sumGrades() {
 
    }

    getAverage() {
        return (this.sumGrades()/6)
    }
}
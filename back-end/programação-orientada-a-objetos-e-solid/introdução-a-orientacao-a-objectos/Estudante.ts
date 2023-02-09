class Estudante { 
    matricula: string;
    name: string;
    test01Grade: number;
    test02Grade: number;
    test03Grade: number;
    test04Grade: number;
    project01Grade: number;
    project02Grade: number;

    constructor(matricula: string, name: string, test01Grade: number, test02Grade: number, test03Grade: number, 
        test04Grade: number, project01Grade: number, project02Grade: number) {
        this.matricula = matricula;
        this.name = name;
        this.test01Grade = test01Grade;
        this.test02Grade = test02Grade;
        this.test03Grade = test03Grade;
        this.test04Grade = test04Grade;
        this.project01Grade = project01Grade;
        this.project02Grade = project02Grade;
    }
    sumGrades() {
        return this.test01Grade + this.test02Grade + this.test03Grade + this.test04Grade + this.project01Grade + this.project02Grade;
    }

    getAverage() {
        return (this.sumGrades()/6)
    }
}
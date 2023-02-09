import Person from "./Person";

export default class Student extends Person {
    private _enrollment = String();
    private _examsGrades: number[] = [];
    private _assignmentsGrades: number[] = [];
  

    constructor(name: string, birthDay: Date) {
      super(name, birthDay);
      this.enrollment = this.generateEnrollment() ;
    }
    
    get enrollment(): string {
      return this._enrollment;
    }
    
    set enrollment(value: string) {
        if (value.length < 16) throw new Error('A matrícula deve possuir pelo menos 16 caracteres')
      this._enrollment = value;
    }

  
    get examsGrades(): number[] {
      return this._examsGrades;
    }
    
    set examsGrades(value: number[]) {
      if (value.length > 4) {
        throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
      }
    
      this._examsGrades = value;
    }
    
    get assignmentsGrades(): number[] {
      return this._assignmentsGrades;
    }
    
    set assignmentsGrades(value: number[]) {
      if (value.length > 2) {
        throw new Error(
          'A pessoa estudante só pode possuir 2 notas de trabalhos.',
        );
      }
    
      this._assignmentsGrades = value;
    }
    
      sumGrades(): number {
        return [...this.examsGrades, ...this.assignmentsGrades]
          .reduce((previousNote, note) => {
            const nextNote = note + previousNote;
    
            return nextNote;
          }, 0);
      }
    
      sumAverageGrade(): number {
        const sumGrades = this.sumGrades();
        const divider = this.examsGrades.length + this.assignmentsGrades.length;
    
        return Math.round(sumGrades / divider);
      }

      generateEnrollment(): string {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    
        return `STU${randomStr}`;
      }

    }
    
    const personOne = new Student('202001011', 'Maria da Silva');
    
    personOne.examsGrades = [25, 20, 23, 23];
    personOne.assignmentsGrades = [45, 45];
    
    console.log(personOne);
    console.log('Soma de todas as notas: ', personOne.sumGrades());
    console.log('Média de todas as notas: ', personOne.sumAverageGrade());
    
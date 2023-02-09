class Data { 
    dia: number;
    mes: number;
    ano: number;

    constructor(dia: number, mes: number, ano: number) {

        if (!Data.validateDate(dia, mes, ano)) {
            this.dia = 1;
            this.mes = 1;
            this.ano = 1900;
          } else {
            this.dia = dia;
            this.mes = mes;
            this.ano = ano;
          }
        }
    
    private static validateDate(day: number, month: number, year: number)
        : boolean {
        const dateStr = `${year}-${month}-${day}`;

        if (new Date(dateStr).getDate() !== day) return false;

        return true;
    }

    getFullYear() {
        return this.ano;
    }

    getYear() {
        const yearString =  this.ano.toString().slice(-2)
        return Number(yearString);
    }

    getMonthName(): string {
        const months = [
          'janeiro',
          'fevereiro',
          'março',
          'abril',
          'maio',
          'junho',
          'julho',
          'agosto',
          'setembro',
          'outubro',
          'novembro',
          'dezembro',
        ];
        return months[this.mes - 1];
      }

    isLeapYear(): boolean {
    return this.ano % 4 === 0;
    }
    


}

export default class Person {
  constructor(private _name: string, private _birthDate: Date) {
    this.name = _name;
    this.birthDate = _birthDate;
  }

  get name(): string {
    return this._name;
  }
    
    set name(value: string) {
      this.validadeName(value);
      this.name = value;
    
      this._name = value;
    }

  get birthDate(): Date {
    return this.birthDate
  }

  set birthDate(value: Date) {
    this.validadeBirthDate(value);
    this._birthDate = value;
  }

  private validadeName(name: string): void {
    if (name.length < 3) {
      throw new Error('O nome deve ter no minimo 3 caracteres') 
    }
  }

  private validadeBirthDate(birthDate: Date): void {
    if (birthDate.getDate() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
  }

}
    

export default class Subject {
    constructor(private _name: string) {
        this.name = _name
    }

    get name() {
        return this._name;
    }
    set name(value) {
        this.validateName(value);
        this._name = value
    }


  private validateName(value: string): void {
    if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
  }
}

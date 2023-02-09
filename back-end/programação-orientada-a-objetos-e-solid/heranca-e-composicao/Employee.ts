
export default interface Employees {
    registration: string;
    salary: number;
    admissionDate: Date;

    generateRegistration(): string;
}
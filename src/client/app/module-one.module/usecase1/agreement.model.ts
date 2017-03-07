export class Agreement {
  constructor(
    public id: number,
    public name: string,
    public kind: string,
    public start_date: string,
    public end_date: string,
    public state: boolean,
    public contact_name: string,
    public contact_phone: string,
    public contact_email: string,
    public details: string,
  ) {  }
}

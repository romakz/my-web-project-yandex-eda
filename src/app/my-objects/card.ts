export class Card {
  public id: number;
  public cardNumber: string;
  public date: string;
  public userFullName: string;
  public cvc: string;
  public userId: string;


  constructor(id: number, cardNumber: string, date: string, userFullName: string, cvc: string, userId: string) {
    this.id = id;
    this.cardNumber = cardNumber;
    this.date = date;
    this.userFullName = userFullName;
    this.cvc = cvc;
    this.userId = userId;
  }
}

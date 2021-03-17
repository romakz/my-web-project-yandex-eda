export class Card {
  public cardNumber: string;
  public date: string;
  public userFullName: string;
  public cvc: string;
  public clientLogin: string;


  constructor(cardNumber: string, date: string, userFullName: string, cvc: string, clientLogin: string) {
    this.cardNumber = cardNumber;
    this.date = date;
    this.userFullName = userFullName;
    this.cvc = cvc;
    this.clientLogin = clientLogin;
  }
}

export class Client {
  public login: string;
  public password: string;
  public firstName: string;
  public lastName: string;
  public imageUrl: string;
  public telephone: string;


  constructor(login: string, password: string, firstName: string, lastName: string, imageUrl: string, telephone: string) {
    this.login = login;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.imageUrl = imageUrl;
    this.telephone = telephone;
  }
}

import Email from "./Email";
import Name from "./Name";
import Password from "./Password";

export default class User {
  constructor (readonly name: Name, readonly email: Email, readonly password: Password, readonly age: number){
    if (age < 18) throw new Error("Invalid age")
  }

  static async create (name: string, email: string, password: string, age: number) {
		return new User(new Name(name), new Email(email), await Password.create(password, "salt"), age);
	}

  async validatePassword (password: string) {
		return this.password.validate(password);
	}
}
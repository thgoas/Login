import User from "../../domain/entity/User"
import UserRepository from "../repository/UserRepository"

export default class Signup {
  constructor ( readonly userRepository: UserRepository){}

  async execute (input: Input): Promise<void> {
    if(input.name.split(" ").length < 2){
      throw new Error ('Invalid name')
    }
    if(!String(input.email).toLocaleLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
      throw new Error ('Invalid email')
    }

    if(input.password.length < 8) {
      throw new Error ('Invalid password')
    }
    if(input.age < 18) {
      throw new Error ('Invalid age')
    }
    
    const user = await User.create(input.name, input.email, input.password, input.age)
     await this.userRepository.save(user)
  }
}

type Input = {
  name: string
  email: string
  password: string
  age: number
}
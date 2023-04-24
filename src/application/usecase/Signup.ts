import UserRepository from "../repository/UserRepository"

export default class Signup {
  constructor ( readonly userRepository: UserRepository){}

  async execute (input: Input): Promise<void> {
    const user = new User()
    this.userRepository.save()
  }
}

type Input = {
  name: string
  email: string
  password: string
  age: number
}
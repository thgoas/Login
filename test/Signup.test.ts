import {expect, test} from 'vitest'
import Signup from '../src/application/usecase/Signup'
test('Deve fazer o signup', async () => {
  const userRepository = new UserRepositoryMemory()
  const signup = new Signup(userRepository)

  const inputSignup = {
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    password: '12345678',
    age: 30
  }
  await signup.execute(inputSignup)

  const login = new Login(userRepository)
  const inputLogin = {
    email: 'john.doe@gmail.com',
    password: '12345678',
    
  }
  const output = await login.execute(inputLogin)

  expect(output.name).toBe('John Doe')
  expect(output.token).toBe('123456')
})

//given | when | then
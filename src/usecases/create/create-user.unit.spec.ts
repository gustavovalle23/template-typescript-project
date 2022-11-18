import { CreateUserUseCase } from './create-user-use-case'

describe('Unit Test - Create User Use Case', () => {
  const MockRepository = (): any => {
    return {
      create: jest.fn(),
      find: jest.fn(),
      findAll: jest.fn(),
      update: jest.fn()
    }
  }

  it('Should create user and return specific output', () => {
    const repository = MockRepository()
    const useCase = new CreateUserUseCase(repository)
    const output = useCase.execute()
    expect(output).toBeUndefined()
  })
})

import { UserRepository } from '../../domain/user/repository/user.repository'

export class CreateUserUseCase {
  private readonly userRepository: UserRepository

  constructor (userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  execute (): void { }
}

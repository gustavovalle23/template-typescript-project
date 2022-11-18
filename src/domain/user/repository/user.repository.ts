import { RepositoryInterface } from '../../repository/repository.interface'
import { User } from '../entity/user'

export interface UserRepository extends RepositoryInterface<User> { }

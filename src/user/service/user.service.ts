import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../models/user.entity';
import { User } from '../models/user.interface';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) { }


    create(user: User): Promise<UserEntity> {
        return this.userRepository.save(user);
    }

    findAll(): Promise<UserEntity[]> {
        return this.userRepository.find();
    }

    findOne(id: number): Promise<UserEntity> {
        return this.userRepository.findOne({ id });
    }

    deleteOne(id: number): Promise<UserEntity> {
        return this.userRepository.findOne({ id })
    }

    updateOne(id: number, user: User): Promise<any> {
        return this.userRepository.update(id, user);
    }
}

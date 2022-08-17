import { getRepository } from 'typeorm';
import { User } from '../../orm/entity/user';

interface TUserPayload {
  email: string;
  password: string;
  startTime: string;
  endTime: string;
}

export default class DataUserManager {
  static async getUserByOption(option: Partial<TUserPayload>) {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(option);
    if (!user) return null;
    return user;
  }

  static create(payload: TUserPayload) {
    if (!payload) return;

    const userRepository = getRepository(User);
    const user = new User();

    return userRepository.save({
      ...user,
      ...payload,
    });
  }

  static async update(payload: Partial<TUserPayload>) {
    if (!payload) return;

    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ email: payload.email });

    if (!user) return;

    userRepository.merge(user, payload);
    return userRepository.save(user);
  }

  static delete(userId: string) {
    return null;
  }
}

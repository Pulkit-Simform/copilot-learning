import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  email: string;
  phoneNo: string;
}

@Injectable()
export class UserService {
  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phoneNo: '1234567890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phoneNo: '0987654321' },
  ];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  create(user: Omit<User, 'id'>): User {
    const newUser = { ...user, id: this.users.length + 1 };
    this.users.push(newUser);
    return newUser;
  }
}
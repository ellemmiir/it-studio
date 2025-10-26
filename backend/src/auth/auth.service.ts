import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && user.passwordHash && bcrypt.compareSync(password, user.passwordHash)) {
      return {
        _id: (user as any)._id,
        email: user.email,
        role: user.role,
        profile: user.profile,
      };
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: String(user._id), role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: String(user._id),
        email: user.email,
        role: user.role,
      },
    };
  }

  async register(userData: any) {
    const hashedPassword = bcrypt.hashSync(userData.password, 10);
    const user = await this.usersService.create({
      ...userData,
      passwordHash: hashedPassword,
      status: 'active',
    });
    return this.login(user);
  }
}

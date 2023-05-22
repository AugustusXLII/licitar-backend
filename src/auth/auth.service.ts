import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}


  async signIn(username: string, pass: string){
    const user: User = this.userService.findByUsername(username);

    if (!user) {
      throw new UnauthorizedException();
    } else if (user.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.username, id: user.id };
    return {
      token: await this.jwtService.signAsync(payload),
    };
  }
}
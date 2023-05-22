import { Body, Controller, Get, Post, HttpCode, HttpStatus, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { UserDTO } from 'src/user/dto/user.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() userData: UserDTO) {
        console.log(userData)
        return this.authService.signIn(userData.username, userData.password);
    }

    @UseGuards(AuthGuard)
    @Get('authUser')
    getAuthenticatedUser(@Request() req) {
      return req.user;
    }
}

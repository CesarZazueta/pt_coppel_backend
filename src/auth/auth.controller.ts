import { Body, Controller, Get, Post, UseGuards , Request} from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { RegisterDto } from './dto/registe.dto.js';
import { AuthGuard } from './guard/auth.guard.js';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ) {}

    @UseGuards(AuthGuard)
    @Post('register')
    register (@Body() registerDto: RegisterDto) {
        console.log('RegisterDto:', registerDto);
        return this.authService.register(registerDto);
    }

    @Post('login')
    login (@Body() loginDto: { usuario: string, contraseña: string }) {
        return this.authService.login(loginDto.usuario, loginDto.contraseña);
    }


    @Get('test')
    @UseGuards(AuthGuard)
    test(@Request() req: any) {
        return req.user;
    }


}

import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private readonly jwtService: JwtService) {}


  async canActivate( 
    context: ExecutionContext,
  ): Promise<boolean>  {

    console.log("entro al guardia");

    const request = context.switchToHttp().getRequest();

   const token = await this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException('Token no proporcionado');
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, { secret: process.env.JWT_SECRET });

      request.user = payload; 

    } catch (error) {
      throw new UnauthorizedException('Token inválido');
    }

    return true;
  }

  async extractTokenFromHeader(request: any): Promise<string | null> {
    const [type, token] = request.headers['authorization']?.split(' ') ?? [];
    if (type !== 'Bearer' || !token) {
      return null;
    }
    return token;
  }
}

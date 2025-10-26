import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(registerDto: any): Promise<{
        access_token: string;
        user: {
            id: string;
            email: any;
            role: any;
        };
    }>;
    login(loginDto: any): Promise<{
        access_token: string;
        user: {
            id: string;
            email: any;
            role: any;
        };
    }>;
    getProfile(req: any): Promise<any>;
}

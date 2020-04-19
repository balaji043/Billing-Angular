import { User } from './user.model';

export class LoginResponse {
    token: string;
    type: string;
    user: User;
}

// Custom imports
import { UserCredentials } from 'src/app/auth/models/user-credentails';

type UserCred = Omit<UserCredentials, 'password'>

export interface UserDetails extends UserCred {
    joinedDate: Date;
}

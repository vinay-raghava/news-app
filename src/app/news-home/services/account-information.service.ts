// Angular imports
import { Injectable } from '@angular/core';

// Custom imports
import { Endpoints } from 'src/app/core';
import { HttpService } from 'src/app/shared';
import { UserDetails } from '../interfaces/user-details';

@Injectable()
export class AccountInformationService {
    constructor(private httpService: HttpService) { }
    public getUserDetails() {
        return this.httpService.getOne<UserDetails>(Endpoints.userDetails);
    }
}

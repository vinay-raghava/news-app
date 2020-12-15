// Angular imports
import { Component, OnInit } from '@angular/core';

// Custom imports
import { AccountInformationService } from '../../services/account-information.service';
import { LoggingService } from 'src/app/shared';
import { UserDetails } from '../../interfaces/user-details';

@Component({
    selector: 'account-info',
    templateUrl: './account-info.component.html'
})
export class AccountInfoComponent implements OnInit {
    public userDetails: UserDetails = <UserDetails>{};
    constructor(
        private accountInformationService: AccountInformationService,
        private log: LoggingService
    ) { }
    public ngOnInit() {
        this.accountInformationService.getUserDetails().subscribe(
            (userDetails: UserDetails) => {
                this.userDetails = userDetails;
            },
            (error) => {
                this.log.error(`Error occurred: ${JSON.stringify(error)}`);
            }
        );
    }
}

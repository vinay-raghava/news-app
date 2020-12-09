// Angular imports
import { Component } from '@angular/core';

// Custom imports
import { LocatableConstants } from 'src/app/core';

@Component({
    selector: 'main-header',
    templateUrl: './main-header.component.html'
})
export class MainHeaderComponent {
    public locatableConstants = LocatableConstants;
}

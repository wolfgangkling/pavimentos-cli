import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Agreement } from './agreement.model';
import {AgreementApiService} from './agreement.service' 

@Component({
    moduleId: module.id,
    selector: 'usecase-one-main-component',
    templateUrl: './main.component.html',
    providers:[AgreementApiService]
})

export class MainComponent implements OnInit {
    agreements: Agreement[];
    selected_agreement: Agreement;

    constructor(
        private service: AgreementApiService,
        private router: Router,
    ){  }

    getAgreements(){
        this.service
        .getAgreements()
        .then(agreements => this.agreements = agreements);
    }

    ngOnInit(){
        this.getAgreements();
    }

    onSelect(agreement: Agreement): void {
        this.selected_agreement = agreement;
        this.router.navigate([
            '/dashboard/module-one-usecase1/detail',
            this.selected_agreement.id]
        );
    }

}
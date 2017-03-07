import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Agreement } from './agreement.model';
import {AgreementApiService} from './agreement.service' 

@Component({
    moduleId: module.id,
    selector: 'agreement-detail',
    templateUrl: './detail.component.html',
    providers:[AgreementApiService]
})

export class AgreementDetailComponent implements OnInit {
    agreement: Agreement;
    kinds = [
        { code: 1, name: "Unica vez" },
        { code: 2, name: "Tracto sucecivo" },
    ];
    myForm: FormGroup;
    
    constructor(
        private _fb: FormBuilder,
        private service: AgreementApiService,
        private route: ActivatedRoute,
        private location: Location
    ) { }
    
    ngOnInit(): void {
        
        this.myForm = this._fb.group({
            name: new FormControl ({value: '', disabled: true}, Validators.required),
            details: new FormControl ({value: '', disabled: true}),
            kind: new FormControl ({value: '', disabled: true}),
            start_date: new FormControl ({value: '', disabled: true}),
            end_date: new FormControl ({value: '', disabled: true}),
        });

        this.route.params
          .switchMap((params: Params) => this.service.getAgreement(+params['id']))
          .subscribe(agreement => {
              console.log(agreement)
          });

    }
    
    save(): void {
        this.service.update(this.agreement)
        .then(() => this.goBack());
    }
    
    goBack(): void {
        this.location.back();
    }
}
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Agreement } from './agreement.model';

@Injectable()
export class AgreementApiService {

  private headers = new Headers({'Content-Type': 'application/json'});
  //private AgreementUrl = 'http://localhost:8000/agreement';
  private AgreementUrl = 'http://192.168.86.5:8000/agreement';

  constructor(private http: Http) { }

  //*/
  getAgreements(): Promise<Agreement[]> {
    return this.http.get(`${this.AgreementUrl}/`)
               .toPromise()
               .then(response => response.json() as Agreement[])
               .catch(this.handleError);
  }


  getAgreement(id: number): Promise<Agreement> {
    const url = `${this.AgreementUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Agreement)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.AgreementUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  //*/
  create(agreement: Agreement): Promise<Agreement> {
    return this.http
      .post(
          `${this.AgreementUrl}/`,
          JSON.stringify(
              {
                  name: agreement.name,
                  kind: agreement.kind,
                  start_date: agreement.start_date,
                  end_date: agreement.end_date,
                  state: agreement.state,
                  contact_name: agreement.contact_name,
                  contact_phone: agreement.contact_phone,
                  contact_email: agreement.contact_email,
                  details: agreement.details,
              }
          ),
          {headers: this.headers}
        )
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }
  //*/
  update(agreement: Agreement): Promise<Agreement> {
    const url = `${this.AgreementUrl}/${agreement.id}/`;
    return this.http
      .put(url, JSON.stringify(agreement), {headers: this.headers})
      .toPromise()
      .then(() => agreement)
      .catch(this.handleError);
  }
  //*/
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
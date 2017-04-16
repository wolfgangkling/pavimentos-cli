import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { Pavimento } from './pavimento.model';

import { roundDecimal } from '../../utils/math.util';
import { Logger } from "angular2-logger/core";

@Injectable()
export class AashtoFlexibleService {

  pavimento: Pavimento;
  
  constructor(
    private logger: Logger
  ) {
  }

  calcular(pavimento: Pavimento): Observable<Pavimento> {

    let N: number = pavimento.ejesequiv;
    let R: string = pavimento.confiabdiseno;
    let Zr: number = this.calcZr(R);
    let So: number = pavimento.errestandar;
    let Po: number = pavimento.servicini;
    let Pt: number = pavimento.servicfin;
    let Mr: number = pavimento.modresili * 10;

    let logW18_objetivo: number = roundDecimal(Math.log10(N), 2);
    let log_obtenido: number = 0;

    let SN_1: number = 100;
    let SN_2: number = 0;
    let SN_tant: number = SN_1;

    log_obtenido = roundDecimal(Zr * So + 9.36 * Math.log10(SN_tant + 1) - 0.2 +
      ((Math.log10((Po - Pt) / 2.7)) / (0.4 + (1094 / (Math.pow(SN_tant + 1, 5.19))))) +
      2.32 * Math.log10(Mr / 0.07) - 8.07, 2);

    for (var i = 0; logW18_objetivo != log_obtenido && i < 100; i++) {
      //this.logger.log('Zr * So + 9.36 * Math.log10(SN_tant + 1) - 0.2: ' + (Zr * So + 9.36 * Math.log10(SN_tant + 1) - 0.2));
      //this.logger.log('Math.log10((Po - Pt) / 2.7): ' + (Math.log10((Po - Pt) / 2.7)));
      //this.logger.log('(0.4 + (1094 / ((SN_tant + 1) ^ 5.19))): ' + (0.4 + (1094 / (Math.pow(SN_tant + 1, 5.19)))));
      //this.logger.log('2.32 * Math.log10(Mr / 0.07) - 8.07, 3: ' + (2.32 * Math.log10(Mr / 0.07) - 8.07));
      this.logger.log('iter: ' + (i + 1));
      this.logger.log('   logW18_objetivo: ' + logW18_objetivo);
      this.logger.log('   log_obtenido: ' + log_obtenido);
      this.logger.log('   SN_1: ' + SN_1);
      this.logger.log('   SN_2: ' + SN_2);

      if (logW18_objetivo < log_obtenido) {
        SN_2 = SN_1;
        SN_1 = SN_1 / 2;
      }
      else {
        SN_1 = (SN_1 + SN_2) / 2
      }
      log_obtenido = roundDecimal(Zr * So + 9.36 * Math.log10(SN_1 + 1) - 0.2 +
        ((Math.log10((Po - Pt) / 2.7)) / (0.4 + (1094 / (Math.pow(SN_1 + 1, 5.19))))) +
        2.32 * Math.log10(Mr / 0.07) - 8.07, 2);
    }
    if (logW18_objetivo == log_obtenido) {
      this.logger.log('logW18_objetivo == log_obtenido');
      pavimento.numestruc = roundDecimal(SN_1, 2);
    }
    else {
      this.logger.log('no converge');
      pavimento.numestruc = null;
    }

    return Observable.of(pavimento);
  }

  calcZr(R: string): number {
    switch (R) {
      case "50.00":
        return 0;
      case "60.00":
        return -0.253;
      case "70.00":
        return -0.524;
      case "75.00":
        return -0.674;
      case "80.00":
        return -0.841;
      case "85.00":
        return -1.037;
      case "90.00":
        return -1.282;
      case "91.00":
        return -1.34;
      case "92.00":
        return -1.405;
      case "93.00":
        return -1.476;
      case "94.00":
        return -1.555;
      case "95.00":
        return -1.645;
      case "96.00":
        return -1.751;
      case "97.00":
        return -1.881;
      case "98.00":
        return -2.054;
      case "99.00":
        return -2.327;
      case "99.90":
        return -3.09;
      case "99.99":
        return -3.75;
      default: throw new RangeError('R contiene un valor inválido');
    }
  }

  confiabDisenoOptions(): string[] {
    return [
      '99.99',
      '99.90',
      '99.00',
      '98.00',
      '97.00',
      '96.00',
      '95.00',
      '94.00',
      '93.00',
      '92.00',
      '91.00',
      '90.00',
      '85.00',
      '80.00',
      '75.00',
      '70.00',
      '60.00',
      '50.00',
    ]
  }

  tipoMaterialOptions(): string[] {
    return [
      'Concreto asfáltico',
      'Base granular',
      'Subbase granular',
      'Base tratada con asfalto',
      'Base tratada con emulsión',
      'Base tratada con cemento',
    ]
  }  
}
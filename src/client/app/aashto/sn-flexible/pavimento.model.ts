export class Pavimento {
  constructor(
    public ejesequiv: number,
    public confiabdiseno: string,
    public errestandar: number,
    public modresili: number,
    public servicini: number,
    public servicfin: number,
    public numestruc: number,
  ) { }
}

export class CapaDiseno {
  constructor(
    public id: number,
    public tipoMaterial: string,
    public nombre: string,
    public coeficienteAporte: number,
    public coeficienteDrenaje: number,
    public espesor: number,
    public aporteAlsn: number,
  ) { }
}
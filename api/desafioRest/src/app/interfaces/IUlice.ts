import  Empresa  from "../entities/Emp";

export interface IUlice {
    id?: number;
    numero: string;
    orgao_ambiental: string;
    emissao: Date;
    validade: Date;
    empresa: Empresa;
    empresa_id: number;
}


export default IUlice;
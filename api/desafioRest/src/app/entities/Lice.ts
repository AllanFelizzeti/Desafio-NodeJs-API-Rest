import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from "typeorm";
import Empresa from "./Emp";

@Entity('licenca')
export class Licenca {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    numero: string;

    @Column({ length: 100 })
    orgao_ambiental: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    emissao: Date;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    validade: Date;

    @Column()
    empresa_id: number;

    @OneToOne(() => Empresa, empresa => empresa.licencas)
    empresa: Empresa;

}

export default Licenca;
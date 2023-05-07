import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('empresa')
class Empresa {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', { length: 100, nullable: false})
  razao_social: string;

  @Column('varchar', { length: 30, nullable: false})
  cnpj: string;

  @Column('varchar', { length: 15, nullable: false})
  cep: string;

  @Column('varchar', { length: 100, nullable: false})
  cidade: string;

  @Column('varchar', { length: 30, nullable: false})
  estado: string;

  @Column('varchar', { length: 100, nullable: false})
  bairro: string;

  @Column('varchar', { length: 100, nullable: false})
  complemento: string;
  licencas: number;
}

export default Empresa;
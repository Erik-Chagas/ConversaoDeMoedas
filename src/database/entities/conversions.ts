import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('Conversions')
export class Conversion{
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    moedaOriginal: string

    @Column()
    moedaDaConversão: string

    @Column()
    valorEnviado: number

    @Column()
    valorConvertido: number
}
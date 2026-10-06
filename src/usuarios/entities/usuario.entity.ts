import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
    password(password: string, password1: any) {
        throw new Error('Method not implemented.');
    }
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ })
    nombre: string;

    @Column({ unique: true, nullable: false })
    usuario: string;

    @Column({ nullable: false })
    contraseña: string;

    @Column({ default: true })
    esta_activo: boolean;

}

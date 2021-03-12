import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class News extends BaseEntity{

    @PrimaryGeneratedColumn()
    readonly id: number;
    @Column()
    title: string;
    @Column()
    content: string;
}

export { News }
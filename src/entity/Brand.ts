import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn, ManyToMany} from 'typeorm';
import { Product } from './Product';

@Entity()
export class Dealer{

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    dealer_name:string

    @Column()
    dealer_contact:string

    // @ManyToMany(()=>Product,(product)=>product.product_dealer,{
   
    // })
    // product:Product[]

    @CreateDateColumn()
    createdAt:Date
}
import {Entity,Column,CreateDateColumn,PrimaryGeneratedColumn, OneToMany} from 'typeorm'
import { Product } from './Product'

@Entity()
export class Category{

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    Category_name:string

    @Column()
    image:string
    
    // @OneToMany(()=>Product,(product)=>product.product_category,{
    //     cascade:true,
    //     onDelete:'CASCADE',onUpdate:'CASCADE'
    // })
    // product:Product[]

    @CreateDateColumn()
    createdAt:Date


}
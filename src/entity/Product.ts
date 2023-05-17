import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn, ManyToOne, OneToMany, ManyToMany, JoinTable} from 'typeorm';
import { Dealer } from './Brand';
import { Category } from './Category';
import { Sales } from './Sales';

@Entity()
export class Product{

    @PrimaryGeneratedColumn('uuid')
    id:string;
    
    @Column()
    product_name:string

    // @ManyToOne(()=>Category,(category)=>category.product,{
    //     eager:true
    // })
    @Column()
    product_category:string 

    @ManyToMany(()=>Dealer)
    @JoinTable()
    dealers:Dealer[]

    @Column()
    MFDCompany:string

    @Column()
    MFDDate:string

    @Column()
    Exp_Date:string

    @Column()
    Discount:string

    @Column()
    Drug_desc:string

    // @Column({
    //     nullable:true
    // })
    // price:string

    // @Column()
    // image:string

    @Column({
        type:'jsonb',
        array:false,
        default:() => "'[]'",
        nullable:true,
    })
    priceAndQuantity:Array<{costPrice:string,Quantity:string,salesPrice:string}>

    @CreateDateColumn()
    createdAt:Date

  


    // @OneToMany(()=>Sales,(sales)=>sales.productId,{
    //     cascade:true,eager:true,
    //     onDelete:'CASCADE',onUpdate:'CASCADE'
    // })
    // sales:Sales[]
}
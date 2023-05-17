import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "dpg-chi73ju4dadc9vlripp0-a.oregon-postgres.render.com",
    port: 5432,
    username: "kisan",
    password: "JH4V2RYn7epx2jkngejFYdMtuzb1Tm4V",
    database: "test_quki",
    ssl:true,
    synchronize: true,
    logging: false,
    entities: [
        'src/entity/**/*.ts'
    ], 
    migrations: [
        'src/migration/**/*.ts'
    ],
    subscribers: [
        'src/subscrib/**/*.ts'
    ],
})

import express from 'express'
import { sequelize } from './database/seeders'

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    sequelize.authenticate().then(() => {
        console.log('DB conection successfull')
    })
    console.log(`Server started succesfuly at port ${PORT}`)
}) 
import express, { Router, Request, Response } from "express"
import 'dotenv/config'

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.get("/", (req : Request, res : Response) => {
    res.json({ message: 'Hello World' })
})

app.listen(PORT, () => console.log('Server running at port http://localhost:' + PORT))

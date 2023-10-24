import express, { Router, Request, Response } from "express"
import cors from "cors"

import { userRouter } from "./services/user/user.router"

import 'dotenv/config'

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/users", userRouter)

app.get("/", (req : Request, res : Response) => {
    res.json({ message: 'Hello World' })
})

app.listen(PORT, () => console.log('Server running at port http://localhost:' + PORT))

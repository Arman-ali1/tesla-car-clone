import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    // origin: "http://localhost:5173",
    origin:process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import
import userRouter from './routes/user.routes.js'
import homeRouter from './routes/homeRouter.js'


//routes declaration
app.use("/api/v1/users", userRouter)
app.use("/",homeRouter)
// http://localhost:8000/api/v1/users/register

export { app }
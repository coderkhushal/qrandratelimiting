const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require("path")
const app = express()
const QRCode = require("qrcode")
const redis = require("./redis")
const ratelimiting = require("./middleware/ratelimiting,js")

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.get("/qrcode",ratelimiting,async (req, res) => {
   
        // exprensive calculations 
        QRCode.toDataURL("www.instagram.com", (er, url) => {

            if (er) {
                res.send("not successfull")
            }
            else {



                res.send(`<img src=${url}></img>
                    <h1>requests: ${req.requests}</h1>
                    <h1>ttl: ${req.ttl}</h1>
                    
                `)

            }
        })
    

})
app.listen(3000, () => {
    console.log("listening on 3000 port")
})
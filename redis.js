const Redis= require("ioredis")
const redis= new Redis(process.env.REDIS_STRING)
module.exports= redis
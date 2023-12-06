const express = require("express")
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//get selected  map items

app.get("/maps", async(req,res)=>{

    try{
        const {name} = req.params
        const allMaps = await pool.query("SELECT * FROM maps WHERE name = $1", {name});
        res.json(allMaps.rows)
    }catch(err){
        console.error(err.message)
    }
})


app.listen(5008,()=>{
    console.log("server started on port 5007")
})
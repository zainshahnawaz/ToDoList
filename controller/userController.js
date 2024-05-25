module.exports={
    createUser:(req,res)=>{
        try {
            return res.send ({
                message:"User Created Suceesfully"
            })
            
        } catch (error) { 
            return res.send({
                error :error.message
            })
            
        }
    }
}

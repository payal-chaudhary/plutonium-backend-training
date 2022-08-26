const UserModel = require("../models/userDetail")
const orderModel = require('../models/orderModel')
const productModel = require("../models/productModel")

const createOrder = async function(req,res){
    let data = req.body
    let isUserVaild= await UserModel.findById(data.userId)
    let isProductValid = await productModel.findById(data.productId)
    if(!data.productId){
        return res.send({msg:"productId field is mandatory"})
    } else if(!data.userId){
        return res.send({msg:"userId field is mandatory"})
    }else if(!isProductValid){
        return res.send({msg:"productId is invaild"})
    }else if(!isUserVaild){
        return res.send({msg:"userId is Invaild"})
    } else{
        let productPrice= isProductValid.price 
      let userBalance= isUserVaild.balance
    if(req.headers.isfreeappuser==="true"){
        data.amount=0;
        data.isFreeAppUser=true;
        let savedData= await orderModel.create(data)
        res.send({msg:savedData})
    }else{
        data.isFreeAppUser=false;
        if(userBalance>=productPrice){
            userBalance=userBalance-productPrice;
            data.amount=productPrice;
            let updatedUser= await UserModel.findByIdAndUpdate(data.userId, {balance:userBalance},{new:true})
            let savedData= await orderModel.create(data)
            res.send({msg:savedData, user:updatedUser})
        }else{
            res.send({alert:"user has insufficent balance"})
        }
    }

    
}
}


module.exports.createOrder=createOrder
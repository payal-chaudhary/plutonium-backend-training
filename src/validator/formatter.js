const formatter = function(){
    const word1 = "     FunctionUp     "
    const word2 = "functionup"
    const word3 = "FUNCTIONUP"
    console.log("FunctionUp after trim : ", word1.trim())
    console.log("functionup to upper case : ", word2.toUpperCase())
    console.log('FUNCTIONUP to lower case :  ', word3.toLowerCase())

}
module.exports.form = formatter
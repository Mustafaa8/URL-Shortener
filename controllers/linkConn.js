const mongoose = require('mongoose')
const link = require('../models/links')
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function randomCharPicker(){
    let result = ''
    for(i=0;i<10;i++){
        result += characters.charAt(Math.floor(Math.random()*characters.length))
    }
    return result
}
const shortLink = async (req,res)=>{
    let oriLink = req.body.urlInput
    let shortId = randomCharPicker()
    while(true){
        let existingLink = await link.findOne({shortedId:shortId})
        if (!existingLink){
            break;
        }
    }
    linkCreated = {originalLink:oriLink,shortedId:shortId}
    await link.create(linkCreated)
    res.render('index.ejs',{shortLink:`http://localhost:3000/${shortId}`})
    // res.json(linkCreated)
}
const getLink = async (req,res,next)=>{
    const id = req.params.id
    const wantedLink = await link.findOne({shortedId:id})
    if (!wantedLink){
        next()
    } 
    res.redirect(301,`${wantedLink.originalLink}`)
    //res.json(wantedLink) to test it in insomnia
}

module.exports = {shortLink,getLink}
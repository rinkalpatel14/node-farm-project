const express = require('express')
const app = express()
const fs = require('fs')

const data = fs.readFileSync('data.json','utf-8')
const setData = JSON.parse(data)
 
app.get('/',(req,res)=>{
    res.render('overview.ejs',{setData})
})

//product page
app.get('/product/:id',(req,res)=>{
    const productId = req.params.id
    // console.log(productId)
    const product = setData[productId]
    res.render('product.ejs',{product})
})

app.listen(4000)



// const express = require('express')
// const app = express()
// const fs = require('fs')

// const data = fs.readFileSync('data.json','utf-8')
// const productsData = JSON.parse(data)

// //overview page
// app.get('/',(req,res)=>{
//     res.render("overview.ejs",{productsData})
// })

// //product deatils page
// app.get('/product/:id',(req,res)=>{
//     const productId = req.params.id
//     const product = productsData[productId]
//     res.render("product.ejs",{product})
// })


// app.listen(3000)


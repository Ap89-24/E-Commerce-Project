const port = 4000;
const express = require("express");

const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");
const { error } = require("console");


// with help of this whatever request get  from reponse automatically pass through json..
app.use(express.json());

//Use this to connect our express app on 4000 port..
app.use(cors());


//Database connection with mongodb..
mongoose.connect("mongodb+srv://AP-ecommerce:Aman8924@cluster0.jltxa.mongodb.net/e-commerce")


// API creation...

app.get("/",(req,res)=>{
    res.send("Express app is running");
})

//Image storage engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req, file,cb)=> {
         return cb(null, `${file.fieldname}_${Date.now()} ${path.extname(file.originalname)}`);
    },
})

const upload = multer({storage: storage});

//Creating upload endpoint for images
app.use('/images',express.static('upload/images'))
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
});

//Schema for creating product...

const Product = mongoose.model("Product",{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    availability:{
        type:Boolean,
        default:true,
    },
})

app.post('/addproduct',async(req,res)=>{
    let products = await Product.find({})
    let id;
    if(products.length > 0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }
    else{
        id = 1;
    }
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image, 
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
      console.log(product);
      await product.save();
      console.log("saved");
      res.json({
        success:true,
        name:req.body.name, 
      })
})

//Creating API for deleting products

app.post('/removeproduct', async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed products")
    res.json({
        success: true,
        name: req.body.name
    })
})

// Creating API for getting all product...

app.get('/allproducts',async(req,res)=>{
    let products = await Product.find({});
    console.log("All products Fetched");
    res.send(products);
})


// Schema creating for User Model....

const Users = mongoose.model('Users' , {
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    cartData:{
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

//Creating API for creating user...

app.post('/signup' , async (req,res)=> {

    let check = await Users.findOne({
        email:req.body.email
    })

    if(check){
        return res.status(400).json({success:false , error:"user already exists with same email"})
    }

    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
        
    }

    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    await user.save();
    res.json({success:true , message:"user created successfully"})


    const data = {
        user:{
            id:user.id
        }
    }

    const token = jwt.sign(data , 'secret_ecom');
    res.json({success:true , token})
})

// Creating API for login...

app.post('/login' , async (req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if(user){
        const passcompare = req.body.password === user.password;
        if(passcompare){
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true, token})
        }
        else{
            res.status(400).json({success:false, error:"password does not match"})
        }
    }
    else{
        res.json({success:false,error:"Wrong email address"});
    }
})

// //Creating endpoint for newcollection  data.....

// app.get('/newcollection' , async (req,res)=>{
//      let product = await Product.find({});
//      let newcollection = product.slice(1).slice(-8);
//      console.log("New collection Fetched");
//      res.send(newcollection)
// })

// Creating middleware to fetch user....

const fetchUser = async (req,res,next) => {
      const token = req.header('auth-token');
      if (!token) {
        res.status(401).send({errors:"Please authenticate using valid token"})
      }
      else{
        try {
            const data = jwt.verify(token, 'secret_ecom');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({errors:"Please authenticate using valid token"})
        }
      }
}


//Creating endpoint for adding products in cartdata.....

app.post('/addtocart' , fetchUser , async (req,res)=> {
    console.log("added",req.body.itemId)
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({_id:req.user.id} , {cartData:userData.cartData});
    res.send("Added");
})

//Creating endpoint for removing products from cartdata.....

app.post('/removefromcart' , fetchUser , async (req,res)=> {
    console.log("removed",req.body.itemId)
    let userData = await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({_id:req.user.id} , {cartData:userData.cartData});
    res.send("Removed"); 
})

//Creating endpoint for getting cart data.....

app.post('/getcart',fetchUser,async (rew,res)=> {
      console.log("GetCart");
      let userData = await Users.findOne({_id:req.user.id});
      res.json(userData.cartData);
})

app.listen(port,(error)=>{
    if(!error){
        console.log(`Server is running on port ${port}`);
    }
    else{
        console.log("Server error : " + error);
    }
})
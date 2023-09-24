const express = require('express')
const router = express.Router()
const Admin = require('./adminModel')
const { body, validationResult } = require('express-validator')
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');  

const JWT_SECRET = 'Abhiisgoodb@oy'

router.post('/login', async (req, res) => {
        let success = false

        try {
            let email = await Admin.findOne({ email: req.body.email })
            if (!email) {
                return res.status(400).json({ error: "enter valid email" })
            }
            let password = await Admin.findOne({password:req.body.password})
            if(!password){
                return res.status(400).json({ error: "enter valid password" })
            }

            const admindata = {
                email: {
                    id: email.id
                }
            }
            const authToken = jwt.sign(admindata, JWT_SECRET)
            success = true
            res.json({ success, authToken })
        } catch (error) {
            console.log(error.message)
            return res.status(500).send('Internal Server Error')
        }
})

module.exports = router
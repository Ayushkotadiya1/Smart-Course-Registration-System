const express = require('express')
const router = express.Router()
const Course = require('./courseModel')
// const { body, validationResult } = require('express-validator')

router.get('/fetchcourse', async (req,res)=>{
    let success = false
    try {
        const course = await Course.find()
        success = true
        res.json({success,course})
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({error:"Internal server error"})
    }
})

router.post('/createcourse', async (req,res)=>{
    try {
        let course = await Course.findOne({courseName : req.body.courseName})
        if(course)
        {
            res.status(400).json('course is already exists')
        }

        course = await Course.create({
            courseName: req.body.courseName,
            image: req.body.image,
            subArea: req.body.subArea,
            desc: req.body.desc,
            profName: req.body.profName,
            prerequisites: req.body.prerequisites,
            timeSlot: req.body.timeSlot,
            capacity: req.body.capacity,
            cgpa: req.body.cgpa
        })
        const result = {
            course: {
                id: course.id
            }
        }
        res.json({result})
        return result

    } catch (error) {
        res.status(500).send('internal server error')
    }
})

router.put('/updatecourse/:id', async (req, res) => {
    try {
        const { timeSlot, capacity, cgpa } = req.body;
        const newCourse = {};

        if (timeSlot) { newCourse.timeSlot = timeSlot; }
        if (capacity) { newCourse.capacity = capacity; }
        if (cgpa) { newCourse.cgpa = cgpa; }

        let course = await Course.findById(req.params.id);

        if (!course) {
            return res.status(404).json({ error: "Course not found" })
        }

        course = await Course.findByIdAndUpdate(req.params.id, { $set: newCourse }, { new: true });

        res.json({ success: true, course });

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ error: "Internal server error" });
    }
});

router.delete('/deletecourse/:id', async (req,res)=>{
    try {
        let course = await Course.findById(req.params.id)
        if (!course) {
            return res.status(404).json({ error: "Course not found" })
        }
        course = await Course.findByIdAndDelete(req.params.id)
        res.json({"success" : "course has been deleted",course:course})
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({error:"Internal server error"})
    }
})

module.exports = router
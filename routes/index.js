const express = require('express');
const router = express.Router();
const {Data} = require('../models');

router.get('/',  async (req, res) => {
    const data = await Data.findOne({
        attributes: ['temperature', 'humidity', 'ultra_fine_dust', 'measurement_time', 'status'],
        order: [['data_idx', 'DESC']]
    })

    res.render('map.html', {temperature : data.temperature, humidity: data.humidity, status: data.status});
})

router.get('/data', async (req, res) => {
    try {
        const data = await Data.findOne({
            attributes: ['temperature', 'humidity', 'ultra_fine_dust', 'measurement_time', 'status'],
            order: [['data_idx', 'DESC']]
        })

        res.status(200).json({data});
    } catch (error) {
        console.error(error);
        res.status(500).json('Internal Server Error');
    }
});

router.post('/data', async (req, res) => {
    try {
        console.log(req.body);
        const {temperature, humidity, ultraFineDust} = req.body;
        let status;

        if(ultraFineDust <= 7) {
            status = '좋음';
        } else if (ultraFineDust > 7 && ultraFineDust <= 35) {
            status = '보통';
        } else if (ultraFineDust > 35 && ultraFineDust <= 75) {
            status = '나쁨';
        } else if (ultraFineDust >= 76) {
            status = '매우 나쁨';
        }

        await Data.create({
            temperature: temperature,
            humidity: humidity,
            ultra_fine_dust: ultraFineDust,
            status: status
        })

        res.status(201).json('success');
    } catch (error) {
        console.error(error);
        res.status(500).json('Internal Server Error!');
    }

});



module.exports = router;

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


indexRouter = require('./routes/index');
const {sequelize} = require('./models');

const app = express();

app.set('port', process.env.PORT || 4000);
sequelize.sync({force: false})
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((error) => {
        console.error(error);
    })

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.use(morgan('dev'));

app.use('/', indexRouter);

app.listen(app.get('port'), 4000, () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});

module.exports = app;

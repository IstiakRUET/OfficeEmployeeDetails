const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/CrudDB', {
mongoose.connect('mongodb+srv://istiak:istiak123@cluster0.ficbj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err)
    console.log('MongoDB connection succeeded.');
    else
    console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;
const model = require('../models/event');
exports.index = (req, res)=>{
    let events = model.find();
    res.render('./event/index', {events});
};

exports.new = (req, res)=>{
    res.send('send event form');
};

exports.create = (req, res)=>{
    res.send('created a new event');
};

exports.show = (req, res)=>{
    let id = req.params.id;
    let event = model.findById(id);
    res.render('./event/show', { event })
};

exports.edit = (req, res)=>{
    res.send('send the edit form')
};

exports.update = (req, res)=>{
    res.send('update story with id ' + req.params.id)
}; 

exports.delete = (req, res)=>{
    res.send('delete story with id ' + req.params.id)
};

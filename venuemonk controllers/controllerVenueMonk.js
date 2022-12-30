const newsDetails = require('../venuemonk models/newsDetails.js');
const { QueryTypes } = require('sequelize');
const sequelize = require('../util/database');
exports.addNewsDetailsInDatabase = (req, res) => {
    const { id, title, subtitle, author_name, published_date, readByUser } = req.body;
    newsDetails.create({
        id,
        title,
        subtitle,
        author_name,
        published_date,
        readByUser
    }).then(() => {
        console.log('Added news details to the database');
        res.json({
           status: "Successfully added news"
        });
    }).catch(err => {
        console.log(err);
        console.log('Error in controller');
        res.status(403).json({
            status: "news already exists, try again"
        });
    });
};

exports.displayAllNews = (req, res) => {
    newsDetails.findAll().then(allEmployee => {
        console.log(allEmployee);
        res.json(allEmployee);
    }).catch(err => {
        console.log(err);
        res.status(404).json({ success: false, message: 'Data does not exists' });
    });
};

exports.getNewsOnLeftSwap = async (req, res) => {
    const users = await sequelize.query("SELECT id, title, subtitle, author_name, published_date, readByUser FROM newsDetails WHERE readByUser=0 ORDER BY published_date DESC LIMIT 0,1;", { type: QueryTypes.SELECT });
    res.status(200).json({ data: users });
};

exports.leftUpdateRead = async (req, res) => {
    const newsId=req.params.newsId;
    sequelize.query(`UPDATE newsDetails SET readByUser=1 WHERE id=${newsId}`, { type: QueryTypes.SELECT });
    res.json({ success:true, message: 'Successfully updated readByUser to true' });
};

exports.getNewsOnRightSwap = async (req, res) => {
    const users = await sequelize.query("SELECT id, title, subtitle, author_name, published_date, readByUser FROM newsDetails WHERE readByUser=1 ORDER BY published_date DESC LIMIT 0,1;", { type: QueryTypes.SELECT });
    res.status(200).json({ data: users });
};
 
exports.rightUpdateRead = async (req, res) => {
    const newsId=req.params.newsId;
    sequelize.query(`UPDATE newsDetails SET readByUser=0 WHERE id=${newsId}`, { type: QueryTypes.SELECT });
    res.json({ success:true, message: 'Successfully updated readByUser to false' });
};
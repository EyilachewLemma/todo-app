// const express = require('express')
const connection = require('../config/database.config')

const getCollection = async (req, res, next) => {
   const sql = 'SELECT * FROM collections';
    connection.query(sql, function (err, result) {
        if (err) throw err;
        res.status(200).json({data: result})
      });
} 

module.exports = {getCollection}
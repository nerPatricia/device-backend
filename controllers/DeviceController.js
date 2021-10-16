const sequelize = require("sequelize");

module.exports = {
    getDevice(req, res) {
        let response = {}

        res.status(200).json(response);
    },


    postDevice(req, res) {
        let response = {}
        
        res.status(200).json(response);
    }

    deleteDevice(req, res) {
    	let response = {};

        res.status(200).json(response);
    }
}

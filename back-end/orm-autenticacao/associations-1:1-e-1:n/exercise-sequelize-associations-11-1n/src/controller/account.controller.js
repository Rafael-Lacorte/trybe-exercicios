const e = require('express');
const { Account, Profile } = require('../models');

const getAccountById = async (req, res) => {
    try {
        const listOfAccounts = await Account.findAll({
            where: { id: req.params.id },
            include: [{ model: Profile, as: 'profile' }],
        });
        if (!listOfAccounts.length) {
            return res.status(404).send({ message: 'Nenhuma conta cadastrada' });
        }

        return res.status(200).json(listOfAccounts[0]);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Algo deu errado!' });
    }
};

const getAccountByIdLaze = async (req, res) => {
    try {
        const listOfAccounts = await Account.findAll({
            where: { id: req.params.id },
        });
    if (!listOfAccounts.length) {
        return res.status(404).send({ message: 'Nenhuma conta cadastrada' });
    } 

    return res.status(200).json(listOfAccounts[0]);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Algo deu errado!' });
    }
};

module.exports = {
    getAccountById,
    getAccountByIdLaze,
};
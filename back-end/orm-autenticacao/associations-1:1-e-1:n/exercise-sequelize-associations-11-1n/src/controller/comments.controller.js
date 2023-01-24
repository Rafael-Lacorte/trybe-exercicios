const { Comment } = require('../models');

const getCommentsByAccountId = async (req, res) => {
  try {
    const listOfComments = await Comment.findAll({
      where: { accountId: req.params.id },
    });

    if (!listOfComments.length) {
      return res.status(404).send({ message: 'Nenhum comentário cadastrado' });
    }

    return res.status(200).json(listOfComments);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

module.exports = {
  getCommentsByAccountId,
};

const { Snippet } = require('../models');

module.exports = {
  async store(req, res, next) {
    try {
      const { categoryId } = req.params.categoryId;

      const snippet = await Snippet.create({
        ...req.body,
        CategoryId: categoryId,
      });
      req.flash('Success', 'Snippet criada com sucesso');

      return res.redirect(`/app/categories/${categoryId}/snippets/${snippet.id}`);
    } catch (err) {
      return next(err);
    }
  },
};

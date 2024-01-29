const categoriesService = require('./categoryService');

const categoryController = {
  getCategories: async (req, res) => {
    try {
      const categoryId = Number(req.params.id);

      if (req.params.id) {
        if (Object.is(categoryId, NaN)) {
          return res.status(400).json({
            message: 'Invalid category id',
          });
        }
        const data = await categoriesService.find(
          categoryId
        );

        if (!data) {
          return res.status(404).json({
            message: 'Category not found',
          });
        }

        return res.json({
          message: 'success',
          data,
        });
      }

      const data = await categoriesService.get();

      return res.json({
        message: 'success',
        data,
      });
    } catch (err) {
      res.status(500).json({
        message: 'Internal server error',
        err,
      });
    }
  },
};

module.exports = {
  getCategories: categoryController.getCategories,
};

const publishersService = require('./publishersService');

const publishersController = {
  getPublishers: async (req, res) => {
    try {
      const publishersId = Number(req.params.id);

      if (req.params.id) {
        if (Object.is(publishersId, NaN)) {
          return res.status(400).json({
            message: 'Invalid publisher id',
          });
        }

        const data = await publishersService.find(
          publishersId
        );

        if (!data) {
          return res.status(404).json({
            message: 'Publisher not found',
          });
        }

        return res.json({
          message: 'success',
          data,
        });
      }

      const data = await publishersService.get();

      res.json({
        message: 'success',
        data,
      });
    } catch (err) {
      res.status(500).json({
        message: 'Internal server error',
      });
    }
  },
};

module.exports = {
  getPublishers: publishersController.getPublishers,
};

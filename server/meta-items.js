import { list } from '../controllers/meta-items'

module.exports = app => {
  app.get('metaitems', list);
};

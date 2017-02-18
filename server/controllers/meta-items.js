import metaItems from '../constants/meta-items'

exports.list = (req, res) => {
  res.json(metaItems);
};

import fs from 'fs'

module.exports = function(app) {
  fs.readdirSync(__dirname).forEach(function(file){
    if (file === 'index.js') return
    const name = file.substr(0, file.indexOf('.'));
    require('./' + name)(app);
  });
};

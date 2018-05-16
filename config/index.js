const configValues = require('./config');

module.exports = {
    getDbConnectionString: () => {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds223760.mlab.com:23760/nodetodosample';
    }
}
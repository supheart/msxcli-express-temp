const app = require('../src/app');
const config = require('../src/configs');

const PORT = config.host.port || 8012;

app.listen(PORT, () => {
  console.log('start http server, listen port ' + PORT);
});
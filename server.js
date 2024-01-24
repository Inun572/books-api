const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

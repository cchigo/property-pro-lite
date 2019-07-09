import express from 'express';
import bodyParser from 'body-parser';

import propertyRoutes from './src/route/prop.route';

const app = express()

app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'YAY! Congratulations! Your first endpoint is working'});
})
//step 1
app.use('/api/v1/properties', propertyRoutes);

app.listen(3300)
console.log('app running on port ', 3300);






// routes








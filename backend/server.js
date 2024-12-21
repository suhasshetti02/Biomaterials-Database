const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const {
  bonegraft,
  cartilagerepair,
  skinsubstitues,
  orthopedicscrews,
  dentalimplants,
  cardiovascularstents,
  filmsandcoatings,
  containersandutensils,
  compostablebags,
  mulchfilms,
  biobatteries,
  flexibleelectronics,
} = require('./models/model');

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

const collectionMap = {
  bonegraft: bonegraft,
  cartilagerepair: cartilagerepair,
  skinsubstitues: skinsubstitues,
  orthopedicscrews: orthopedicscrews,
  dentalimplants: dentalimplants,
  cardiovascularstents: cardiovascularstents,
  filmsandcoatings: filmsandcoatings,
  containersandutensils: containersandutensils,
  compostablebags: compostablebags,
  mulchfilms: mulchfilms,
  biobatteries: biobatteries,
  flexibleelectronics: flexibleelectronics,
};

app.get('/:collection', async (req, res) => {
  const { collection } = req.params;
  const model = collectionMap[collection.toLowerCase()];
  

  if (!model) {
    return res.status(404).json({ message: 'Collection not found' });
  }

  try {
    const materials = await model.find();
    res.json(materials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// start
app.get('/all', async (req, res) => {
  const allMaterials = [];
  const collectionNames = Object.keys(collectionMap); // Array of all collection names

  console.log('Collection Map:', collectionMap); // Debugging log

  try {
    // Fetch data from each collection
    for (const collectionName of collectionNames) {
      console.log(`Fetching data from collection: ${collectionName}`); // Debugging log

      const model = collectionMap[collectionName]; // Get the model for the collection

      if (!model) {
        console.log(`Model for ${collectionName} not found`); // Debugging log
        continue;
      }

      // Fetch data from the collection
      const materials = await model.find();

      if (materials.length > 0) {
        allMaterials.push({
          collection: collectionName,
          materials: materials,
        });
      }
    }

    // If no data found in any collection
    if (allMaterials.length === 0) {
      return res.status(404).json({ message: 'No data found from any collection' });
    }

    console.log('All materials fetched:', allMaterials); // Debugging log
    return res.json(allMaterials); // Send all data as response
  } catch (error) {
    console.error('Error fetching data:', error); // Error log
    return res.status(500).json({ message: 'Error fetching data' });
  }
});

// end 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

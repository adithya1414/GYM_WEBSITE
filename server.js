// const mongoose= require('mongoose');
// const dbUrl='

// const connectionParams ={
//   useNewUrlParser : true,
//   useUnifiedTopology: true
// }

// mongoose.connect(dbUrl,connectionParams).then(()=>{
//   console.log("connected");
// })
// .catch((e)=>{
//   console.log(e);
// })

// const celebritySchema = new mongoose.Schema({
//   celebrityName: String,
//   dietPlan: String,
//   exercises: String
// });

// const Celebrity = mongoose.model('Starfitness', celebritySchema);

// const celebrityData = [
//   {
//     celebrityName: 'John Doe',
//     dietPlan: 'Sample diet plan for John Doe',
//     exercises: 'Sample exercise routine for John Doe'
//   },
//   {
//     celebrityName: 'Jane Smith',
//     dietPlan: 'Sample diet plan for Jane Smith',
//     exercises: 'Sample exercise routine for Jane Smith'
//   }
//   // Add more celebrity data as needed
// ];

// // Use the promise returned by insertMany
// Starfitness.insertMany(celebrityData)
//   .then(() => {
//     console.log('Data inserted successfully');
//   })
//   .catch((err) => {
//     console.error('Error inserting data:', err);
//   })
//   .finally(() => {
//     // Close the MongoDB connection
//     mongoose.connection.close();
//   });



const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://adithyakarnati14:xK4BVBW4VuaZuEfl@starfitness.0hzjdi3.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebritySchema = new mongoose.Schema({
  celebrityName: String,
  dietPlan: String,
  exercises: String
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

const celebrityData = [
  {
    celebrityName: 'John Doe',
    dietPlan: 'Sample diet plan for John Doe',
    exercises: 'Sample exercise routine for John Doe'
  },
  {
    celebrityName: 'Jane Smith',
    dietPlan: 'Sample diet plan for Jane Smith',
    exercises: 'Sample exercise routine for Jane Smith'
  }
  // Add more celebrity data as needed
];

(async () => {
  try {
    await Celebrity.insertMany(celebrityData);
    console.log('Data inserted successfully');
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    // Close the MongoDB connection
    mongoose.connection.close();
  }
})();




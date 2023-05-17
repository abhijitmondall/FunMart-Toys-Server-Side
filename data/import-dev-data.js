const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({
  path: './config.env',
});

const Jobs = require('./../models/jobModel');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then((con) => {
  console.log('DB connection established');
});

// Read JSON File
const jobs = JSON.parse(fs.readFileSync(`${__dirname}/jobsData.json`, 'utf8'));

// Import Data Into DB
const importData = async () => {
  try {
    await Jobs.create(jobs);
    console.log('Data Imported Successfully');
  } catch (err) {
    console.log('Failed to Import', err);
  }
  process.exit();
};

// Delete All Data From DB
const deleteData = async () => {
  try {
    await Jobs.deleteMany();
    console.log('Data Deleted Successfully');
  } catch (err) {
    console.log('Failed to Delete', err);
  }
  process.exit();
};

if (process.argv.includes('--import')) {
  importData();
} else if (process.argv.includes('--delete')) {
  deleteData();
}
console.log(process.argv);

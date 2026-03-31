const mongoose = require("mongoose");
const initData = require("../init/data.js");
const Listing = require("../models/listing.js");
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const Mongourl = "mongodb://127.0.0.1:27017/wanderlust";
// const dbUrl = "mongodb+srv://firstMajor-project:intTW5VaY9oNZkD4@cluster0.e7vjgjx.mongodb.net/?appName=Cluster0";
main()
    .then(() => {
        console.log("connected to db");
    }).catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(Mongourl);
}

const initDB = async() => {
    initData.data = initData.data.map((obj) => ({...obj, owner: "69398658db316ea5d7722923" }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();
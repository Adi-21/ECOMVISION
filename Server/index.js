import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

// data imports
// import User from "./models/User.js";
// import Product from "./models/Product.js";
// import ProductStat from "./models/ProductStat.js";
// import Transaction from "./models/Transaction.js";
// import OverallStat from "./models/OverallStat.js";
// import AffiliateStat from "./models/Affiliatestat.js";
// import {
//     dataUser,
//     dataProduct,
//     dataProductStat,
//     dataTransaction,
//     dataOverallStat,
//     dataAffiliateStat,
// } from "./data/index.js";

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
        console.log('Connected to MongoDB');
        // data imports
        // User.insertMany(dataUser)
        //     .then(() => console.log("Users Imported"))
        //     .catch((error) => console.log(error));
        // Product.insertMany(dataProduct)
        //     .then(() => console.log("Products Imported"))    
        //     .catch((error) => console.log(error));
        // ProductStat.insertMany(dataProductStat)
        //     .then(() => console.log("Product Stats Imported"))
        //     .catch((error) => console.log(error));
        // Transaction.insertMany(dataTransaction)
        //     .then(() => console.log("Transactions Imported"))
        //     .catch((error) => console.log(error));
        // OverallStat.insertMany(dataOverallStat)
        //     .then(() => console.log("Overall Stats Imported"))
        //     .catch((error) => console.log(error));
        // AffiliateStat.insertMany(dataAffiliateStat)
        //     .then(() => console.log("Affiliate Stats Imported"))
        //     .catch((error) => console.log(error));
    })
    .catch((error) => console.log(`${error} did not connect`));
// // import express from "express";
// // import dotenv from "dotenv";
// // import mongoose from "mongoose";
// // import cors from "cors";
// // import productRoutes from "./routes/productRoutes.js";
// // import blogRoutes from "./routes/blogRoutes.js";
// // import contactRoutes from "./routes/contactRoutes.js";
// // import clientRoutes from "./routes/clientRoutes.js";
// // import brandRoutes from "./routes/brandRoutes.js";
// // import shopGramRoutes from "./routes/shopGramRoutes.js";
// // import authRoutes from "./routes/auth.js";
// // import adminRoutes from "./routes/adminRoutes.js";
// // import orderRoutes from "./routes/orderRoutes.js";


// // dotenv.config();
// // const app = express();

// // app.use(cors());
// // app.use(express.json());

// // app.use("/api/products", productRoutes);
// // app.use("/api/blogs", blogRoutes);
// // app.use("/api/contacts", contactRoutes);
// // app.use("/api/clients", clientRoutes);
// // app.use("/api/brands", brandRoutes);
// // app.use("/api/shopgram", shopGramRoutes);
// // app.use("/api/auth", authRoutes);
// // app.use("/api/admin", adminRoutes);
// // app.use("/api/orders", orderRoutes);

// // mongoose.connect(process.env.MONGO_URI)
// //   .then(() => console.log("MongoDB Connected"))
// //   .catch(err => console.log(err));

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// // app.js
// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";

// // Routes
// import productRoutes from "./routes/productRoutes.js";
// import blogRoutes from "./routes/blogRoutes.js";
// import contactRoutes from "./routes/contactRoutes.js";
// import clientRoutes from "./routes/clientRoutes.js";
// import brandRoutes from "./routes/brandRoutes.js";
// import shopGramRoutes from "./routes/shopGramRoutes.js";
// import authRoutes from "./routes/auth.js";
// import adminRoutes from "./routes/adminRoutes.js";
// import orderRoutes from "./routes/orderRoutes.js";

// // Load environment variables from .env
// dotenv.config();

// // Express app setup
// const app = express();
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// const mongoURL = process.env.MONGODB_URL; // Must match .env variable

// if (!mongoURL) {
//   console.error("❌ Error: MONGODB_URL is not defined in .env file");
//   process.exit(1); // Stop server if MongoDB URL is missing
// }

// // Log connection URL (hide password)
// const maskedURL = mongoURL.replace(/:([^:@]+)@/, ":***@");
// console.log("🔗 Connecting to MongoDB:", maskedURL);

// // Extract and log cluster name from URL
// const clusterMatch = mongoURL.match(/@([^/]+)\.mongodb\.net/);
// if (clusterMatch) {
//   console.log("🌐 Cluster:", clusterMatch[1]);
// }

// mongoose.connect(mongoURL)
//   .then(async () => {
//     // Wait a bit for connection to stabilize
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     const db = mongoose.connection.db;
//     const connection = mongoose.connection;
    
//     console.log("✅ MongoDB Connected");
//     console.log("📊 Database name:", db.databaseName);
//     console.log("🔌 Connection state:", connection.readyState === 1 ? "Connected" : "Not connected");
    
//     // List all collections
//     try {
//       const collections = await db.listCollections().toArray();
//       console.log("📦 Available collections:", collections.map(c => c.name).join(", "));
      
//       if (collections.length === 0) {
//         console.warn("⚠️ WARNING: No collections found in database!");
//       }
      
//       let totalDocs = 0;
//       for (const collection of collections) {
//         const count = await db.collection(collection.name).countDocuments();
//         totalDocs += count;
//         if (count > 0) {
//           console.log(`  ✅ ${collection.name}: ${count} documents`);
//         } else {
//           console.log(`  ⚠️  ${collection.name}: ${count} documents (EMPTY)`);
//         }
//       }
      
//       console.log(`\n📈 Total documents across all collections: ${totalDocs}`);
      
//       if (totalDocs === 0) {
//         console.warn("\n WARNING: Database is EMPTY!");
//         console.warn(" This means either:");
//         console.warn("   1. You're connected to the wrong database/cluster");
//         console.warn("   2. Your connection string points to a different cluster");
//         console.warn("   3. The data exists in a different database");
//         console.warn("\n Solution: Verify your connection string matches the exact cluster you see in MongoDB Atlas");
//       }
//     } catch (err) {
//       console.error("❌ Error listing collections:", err);
//     }
//   })
//   .catch(err => console.error("❌ MongoDB connection error:", err));

// // Routes
// app.use("/api/products", productRoutes);
// app.use("/api/blogs", blogRoutes);
// app.use("/api/contacts", contactRoutes);
// app.use("/api/clients", clientRoutes);
// app.use("/api/brands", brandRoutes);
// app.use("/api/shopgram", shopGramRoutes);
// app.use("/api/auth", authRoutes);
// app.use("/api/admin", adminRoutes);
// app.use("/api/orders", orderRoutes);

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// app.js
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

// Routes
import productRoutes from "./routes/productRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import clientRoutes from "./routes/clientRoutes.js";
import brandRoutes from "./routes/brandRoutes.js";
import shopGramRoutes from "./routes/shopGramRoutes.js";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/adminRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

// Load environment variables from .env
dotenv.config();

// Express app setup
const app = express();

// ✅ CORS setup
const allowedOrigins = [
  "https://ecomus-uxgv.vercel.app", // main Vercel frontend
  "https://ecomus-uxgv-git-main-kashyaps-projects-0a7d093d.vercel.app",
  "https://ecomus-uxgv-ovgdsu97d-kashyaps-projects-0a7d093d.vercel.app"
];

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

// JSON body parser
app.use(express.json());

// MongoDB connection
const mongoURL = process.env.MONGODB_URL;
if (!mongoURL) {
  console.error("❌ Error: MONGODB_URL is not defined in .env file");
  process.exit(1);
}

const maskedURL = mongoURL.replace(/:([^:@]+)@/, ":***@");
console.log("🔗 Connecting to MongoDB:", maskedURL);

const clusterMatch = mongoURL.match(/@([^/]+)\.mongodb\.net/);
if (clusterMatch) console.log("🌐 Cluster:", clusterMatch[1]);

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  const db = mongoose.connection.db;
  console.log("✅ MongoDB Connected");
  console.log("📊 Database name:", db.databaseName);

  try {
    const collections = await db.listCollections().toArray();
    console.log("📦 Available collections:", collections.map(c => c.name).join(", "));
    let totalDocs = 0;
    for (const collection of collections) {
      const count = await db.collection(collection.name).countDocuments();
      totalDocs += count;
      console.log(`  ${collection.name}: ${count} documents`);
    }
    if (totalDocs === 0) console.warn("⚠️ WARNING: Database is EMPTY!");
  } catch (err) {
    console.error("❌ Error listing collections:", err);
  }
})
.catch(err => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/products", productRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/brands", brandRoutes);
app.use("/api/shopgram", shopGramRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/orders", orderRoutes);

// Root route (optional)
app.get("/", (req, res) => {
  res.send("Backend server is running!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

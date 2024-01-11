const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const placeRoute = require("./routes/place");
const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
dotenv.config();



mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Bağlantısı Başarılı"))
  .catch((err) => {
    console.log(err);
});


//ROUTERLARI ,ARA YAZILIMLARI ÇAĞIRMA
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/places", placeRoute);



app.listen(process.env.PORT || 5000, () => {
  console.log("Server Tarafı Çalışıyor");
});
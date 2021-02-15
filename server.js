const stripe = require('stripe')('sk_test_51IFVIrC94ABBpAEb2HBKe37ca8EGQ89bdb9M8WkGHc1lvy7KEKEDQoJ52tc3fr4gl5g0so2x6VdR1ch9PEYBvXre00B6v1iV31');
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes");

app.use(cors());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.post("/checkout" , async (req, res) => {
  console.log("Request" , req.body);

  let error;
  let status;
  try {
    const {total, token, youPay} = req.body
    console.log(youPay)
    const customer = await
    stripe.customers.create ({
      email: token.email,
      source: token.id
    });
    const idempotency_key= uuidv4();
    const charge = await stripe.charges.create(
      {
        amount: youPay * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased paitning(s) for ${total.price}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      },
      {
        idempotency_key
      }
    );
    console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.log("Error", error)
    status= "failure"
  }

  res.json( {error, status });
})

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/painting",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

// Use apiRoutes
app.use(apiRoutes);


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
require("dotenv").config();
const app = require("./app");
const japan = require("./knex");

const PORT = process.env.PORT || 9000;

(async () => {
  try {
    console.log("Running migrations...");
    await japan.migrate.latest();

    console.log("Starting express...");
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  } catch (err) {
    console.error("Error starting app!", err);
    process.exit(-1);
  }
})();
const PORT = process.env.PORT || 3000;
const app = require("./api/app");

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});
const PORT = process.env.PORT || 3001;
const app = require("./api/app");

app.listen(PORT, () => {
    console.log(`Server App listening on port: ${PORT}`);
});
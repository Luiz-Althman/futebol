const express = require("express");
const jogadoresRoutes = require("./src/routes/Jogadores");
const teamsRoutes = require("./src/routes/teams");
const PositionsRoutes = require("./src/routes/positions");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(teamsRoutes);
app.use(jogadoresRoutes);
app.use(PositionsRoutes);

app.listen(port, () => {
  console.log(`Meu serivdor está funcionando em: http://localhost:${port}`);
});

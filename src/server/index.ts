import dotEnv from "dotenv";
import Fastify from "fastify";
import fastifyView from "@fastify/view";
import hbs from "hbs";
import { renderApp } from "./providers/renderApp";

// config env variables
dotEnv.config();

// Read application port from env vars
const PORT = parseInt(process.env.APPLICATION_PORT) || 3000;

// create fastify server
const app = Fastify();

// Config view loader
app.register(fastifyView, {
  engine: {
    handlebars: hbs,
  },
});

// Declare a route
app.get("/", async function handler(request, reply) {
  const markup = renderApp();
  return reply.view("./src/server/views/app.hbs", {
    markup,
  });
});

// Run the fastify server!
const run = async () => {
  try {
    await app.listen({
      port: PORT,
    });

    console.log(`App listening on port :${PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

run();

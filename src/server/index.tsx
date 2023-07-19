import path from "path";
import dotEnv from "dotenv";
import Fastify from "fastify";
import fastifyView from "@fastify/view";
import fastifyStatic from "@fastify/static";
import fastifyCompress from "@fastify/compress";
import hbs from "hbs";
import { renderApp } from "./providers/renderApp";

// config env variables
dotEnv.config();

// Read application port from env vars
const PORT = parseInt(process.env.APPLICATION_PORT) || 3000;

// create fastify server
const app = Fastify();

// Enable text compression
app.register(fastifyCompress);

// Serve static files
app.register(fastifyStatic, {
  root: [
    path.join(__dirname, "../../public"),
    path.join(__dirname, "../../dist/client"),
  ],
  prefix: "/static/",
});

// Config view loader
app.register(fastifyView, {
  engine: {
    handlebars: hbs,
  },
});

// Declare a route
app.get("/*", async function handler(request, reply) {
  const { markup, data } = await renderApp(request.url);
  return reply.view("./src/server/views/app.hbs", {
    markup,
    data: JSON.stringify(data),
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

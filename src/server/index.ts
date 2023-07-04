import Fastify from "fastify";
import dotEnv from "dotenv";

// config env variables
dotEnv.config();

// Read application port from env vars
const PORT = parseInt(process.env.APPLICATION_PORT) || 3000;

// create fastify server
const app = Fastify();

// Declare a route
app.get("/", async function handler(request, reply) {
  return { hello: "mijol" };
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

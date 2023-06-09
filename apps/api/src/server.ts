import fastify from "fastify";

const server = fastify({ logger: true });

const start = async () => {
  try {
    await server.listen({ port: 4000 });

    const address = server.server.address();
    const port = typeof address === "string" ? address : address?.port;

    server.log.info("App started listening at port", port);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();

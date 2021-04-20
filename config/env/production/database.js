const { parse } = require("pg-connection-string");

const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL"));

  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "postgres",
          host: config.Host,
          port: config.Port,
          database: config.Database,
          username: config.User,
          password: config.Password,
          ssl: { rejectUnauthorized: false }
        },
        options: {
          ssl: false
        },
      },
    },
  };
};


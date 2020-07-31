const awilix = require("awilix");

const Lifetime = awilix.Lifetime;
const InjectionMode = awilix.InjectionMode;
const container = awilix.createContainer();

container.loadModules(["app/**/repositories/*.js"], {
  resolverOptions: {
    lifetime: Lifetime.SINGLETON,
    injectionMode: InjectionMode.PROXY,
  },
});

const Mongo = require("../interfaces/mongo")(
  "mongodb://localhost:27017",
  "theKosherEats"
);

container.register({
  db: awilix.asFunction(Mongo, { lifetime: Lifetime.SINGLETON }),
  hello: awilix.asFunction(() => {
    return {
      b: () => "b",
    };
  }),
});

module.exports = container;

import { Output, randomPassword, Services } from "~templates-utils";
import { Input } from "./meta";

export function generate(input: Input): Output {
  const services: Services = [];
  const databasePassword = randomPassword();

  services.push({
    type: "app",
    data: {
      projectName: input.projectName,
      serviceName: input.appServiceName,
      env: [
        `SECRET_KEY_BASE=${secretkey}`,
        `DEFAULT_LOCALE=${input.defaultLocale}`,
        `REDIS_URL=redis://default@${input.projectName}_${input.redisServiceName}:6379`,
        `REDIS_PASSWORD=${randomPasswordRedis}`,
        `REDIS_OPENSSL_VERIFY_MODE=none`,
        `MONGODB_DATABASE=${input.projectName}`,
        `MONGODB_HOST=${input.projectName}_${input.databaseServiceName}`,
        `MONGODB_USERNAME=MONGODB`,
        `MONGODB_PASSWORD=${randomPasswordMONGODB}`,
        `RAILS_MAX_THREADS=5`,
        `NODE_ENV=production`,
        `RAILS_ENV=production`,
        `INSTALLATION_ENV=docker`,
      ].join("\n"),
      source: {
        type: "image",
        image: input.appServiceImage,
      },
      proxy: {
        port: 3000,
        secure: true,
      },
      deploy: {
        command:
          "bundle exec rails db:chatwoot_prepare && bundle exec rails s -p 3000 -b 0.0.0.0",
      },
      mounts: [
        {
          type: "volume",
          name: "data",
          mountPath: "/data/storage",
        },
        {
          type: "volume",
          name: "app",
          mountPath: "/app/storage",
        },
      ],
    },
  });

  services.push({
    type: "redis",
    data: {
      projectName: input.projectName,
      serviceName: input.redisServiceName,
      password: randomPasswordRedis,
    },
  });

  services.push({
    type: "mongodb",
    data: {
      projectName: input.projectName,
      serviceName: input.databaseServiceName,
      image: "mongodb:6",
      password: randomPasswordMONGODB,
    },
  });

  return { services };
}

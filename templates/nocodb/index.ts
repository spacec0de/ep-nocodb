import {
  Output,
  randomPassword,
  Services,
} from "~templates-utils";
import { Input } from "./meta";

export function generate(input: Input): Output {
  const services: Services = [];
  const databasePassword = randomPassword();
  const coreSecret = randomString();

  services.push({
    type: "postgres",
    data: {
      projectName: input.projectName,
      serviceName: input.databaseServiceName,
      password: databasePassword,
    },
  });

  services.push({
    type: "app",
    data: {
      projectName: input.projectName,
      serviceName: input.appServiceName,
      source: {
        type: "image",
        image: input.appServiceImage,
      },
      proxy: { port: 8080, secure: false },
      env: [
        `NC_DB=postgres://postgres:${databasePassword}@${input.projectName}_${input.databaseServiceName}:5432/${input.projectName}`,
      ].join("\n"),
      mounts: [
        {
          type: "volume",
          name: "nc_data",
          mountPath: "/usr/app/data",
        },
      ],
    },
  });

  return { services };
}

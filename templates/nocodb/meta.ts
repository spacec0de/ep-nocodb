// Generated using "npm run build-templates"

export const meta = {
  name: "NocoDB",
  description:
    "NocoDB is an open source Airtable alternative and no code platform that turns any database into a smart spreadsheet.",
  instructions: null,
  changeLog: [{ date: "2023-02-8", description: "first release" }],
  links: [
    { label: "Website", url: "https://www.nocodb.com/" },
    {
      label: "Documentation",
      url: "https://docs.nocodb.com/getting-started/installation/",
    },
    { label: "Github", url: "https://github.com/nocodb/nocodb" },
  ],
  contributors: [{ name: "spacec0de", url: "https://github.com/spacec0de" }],
  schema: {
    type: "object",
    required: [
      "projectName",
      "domain",
      "appServiceName",
      "appServiceImage",
      "databaseServiceName",
    ],
    properties: {
      projectName: { type: "string", title: "Project Name" },
      appServiceName: {
        type: "string",
        title: "App Service Name",
        default: "nocodb",
      },
      appServiceImage: {
        type: "string",
        title: "App Service Image",
        default: "nocodb/nocodb:0.104.3",
      },
      databaseServiceName: {
        type: "string",
        title: "Database Service Name",
        default: "nocodb-db",
      },
    },
  },
  logo: "logo.png",
  screenshots: [],
};

export type ProjectName = string;
export type AppServiceName = string;
export type AppServiceImage = string;
export type DatabaseServiceName = string;

export interface Input {
  projectName: ProjectName;
  appServiceName: AppServiceName;
  appServiceImage: AppServiceImage;
  databaseServiceName: DatabaseServiceName;
}

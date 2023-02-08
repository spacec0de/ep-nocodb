"use strict";
exports.id = 186;
exports.ids = [186];
exports.modules = {

/***/ 186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rjsf_chakra_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68);
/* harmony import */ var _rjsf_chakra_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rjsf_chakra_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_templates__WEBPACK_IMPORTED_MODULE_5__]);
_templates__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Home = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { slug  } = router.query;
    const template = _templates__WEBPACK_IMPORTED_MODULE_5__/* ["default"].find */ .Z.find((item)=>item.slug === slug
    );
    const { 0: formData1 , 1: setFormData  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const { 0: output1 , 1: setOutput  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { hasCopied , onCopy  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useClipboard)(output1);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setFormData(null);
        setOutput("");
    }, [
        slug
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        display: {
            lg: "grid"
        },
        gridTemplateRows: "auto 1fr",
        gridTemplateColumns: "400px 1fr",
        height: {
            lg: "100vh"
        },
        bg: "gray.800",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                shadow: "md",
                zIndex: "100",
                gridRow: "1 / 2",
                gridColumn: "1 / 3",
                px: "4",
                py: "2",
                bg: "white",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                    direction: "row",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            fontWeight: "bold",
                            fontSize: "lg",
                            mr: "6",
                            children: "Templates"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Select, {
                            width: "64",
                            value: slug,
                            onChange: (e)=>{
                                router.push(e.target.value);
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "",
                                    children: "Select Template"
                                }),
                                _templates__WEBPACK_IMPORTED_MODULE_5__/* ["default"].map */ .Z.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: item.slug,
                                        children: item.meta.name
                                    }, item.slug)
                                )
                            ]
                        })
                    ]
                })
            }),
            template && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                gridRow: "2 / 3",
                gridColumn: "1 / 2",
                overflow: "auto",
                p: "4",
                bg: "white",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_rjsf_chakra_ui__WEBPACK_IMPORTED_MODULE_2___default()), {
                    schema: template.meta.schema,
                    formData: formData1,
                    onChange: (event)=>setFormData(event.formData)
                    ,
                    onSubmit: ({ formData  })=>{
                        try {
                            const output = template.generate(formData);
                            setOutput(JSON.stringify(output, null, 2));
                        } catch (error) {
                            setOutput(`Error: ${error.message}`);
                        }
                    },
                    noHtml5Validate: true,
                    showErrorList: false,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        type: "submit",
                        colorScheme: "brand",
                        children: "Generate"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                gridRow: "2 / 3",
                gridColumn: "2 / 3",
                overflow: "auto",
                p: "4",
                children: output1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                    alignItems: "start",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            onClick: onCopy,
                            children: hasCopied ? "Copied" : "Copy"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            as: "pre",
                            overflow: "auto",
                            w: "100%",
                            color: "white",
                            children: output1
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 641:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nocodb_meta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(815);
/* harmony import */ var _nocodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(831);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_nocodb__WEBPACK_IMPORTED_MODULE_1__]);
_nocodb__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Generated using "npm run build-templates"


const templates = [
    {
        slug: "nocodb",
        meta: _nocodb_meta__WEBPACK_IMPORTED_MODULE_0__/* .meta */ .$,
        generate: _nocodb__WEBPACK_IMPORTED_MODULE_1__/* .generate */ .R
    }, 
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (templates);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 831:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ generate)
/* harmony export */ });
/* harmony import */ var _templates_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(361);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_templates_utils__WEBPACK_IMPORTED_MODULE_0__]);
_templates_utils__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function generate(input) {
    const services = [];
    const passwordPostgres = (0,_templates_utils__WEBPACK_IMPORTED_MODULE_0__/* .randomPassword */ .l8)();
    const passwordRedis = (0,_templates_utils__WEBPACK_IMPORTED_MODULE_0__/* .randomPassword */ .l8)();
    const jwtSecret = (0,_templates_utils__WEBPACK_IMPORTED_MODULE_0__/* .randomString */ .O1)(32);
    services.push({
        type: "postgres",
        data: {
            projectName: input.projectName,
            serviceName: input.databaseServiceName,
            image: "postgres:15",
            password: passwordPostgres
        }
    });
    services.push({
        type: "redis",
        data: {
            projectName: input.projectName,
            serviceName: input.redisServiceName,
            password: passwordRedis
        }
    });
    services.push({
        type: "app",
        data: {
            projectName: input.projectName,
            serviceName: input.appServiceName,
            source: {
                type: "image",
                image: input.appServiceImage
            },
            proxy: {
                port: 8080,
                secure: true
            },
            env: [
                `DATABASE_URL=postgres://postgres:${passwordPostgres}@${input.projectName}_${input.databaseServiceName}:5432/${input.projectName}`,
                `NC_REDIS_URL=redis://default:${passwordRedis}@${input.projectName}_${input.redisServiceName}:6379`,
                `NC_AUTH_JWT_SECRET=${jwtSecret}`,
                `NC_PUBLIC_URL=https://${input.domain}`, 
            ].join("\n"),
            mounts: [
                {
                    type: "volume",
                    name: "nc_data",
                    mountPath: "/usr/app/data"
                }, 
            ]
        }
    });
    return {
        services
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ meta)
/* harmony export */ });
// Generated using "npm run build-templates"
const meta = {
    name: "NocoDB",
    description: "NocoDB is an open source Airtable alternative and no code platform that turns any database into a smart spreadsheet.",
    instructions: null,
    changeLog: [
        {
            date: "2023-02-8",
            description: "first release"
        }
    ],
    links: [
        {
            label: "Website",
            url: "https://www.nocodb.com/"
        },
        {
            label: "Documentation",
            url: "https://docs.nocodb.com/getting-started/installation/"
        },
        {
            label: "Github",
            url: "https://github.com/nocodb/nocodb"
        }, 
    ],
    contributors: [
        {
            name: "spacec0de",
            url: "https://github.com/spacec0de"
        }
    ],
    schema: {
        type: "object",
        required: [
            "projectName",
            "appServiceName",
            "appServiceImage",
            "databaseServiceName",
            "redisServiceName", 
        ],
        properties: {
            projectName: {
                type: "string",
                title: "Project Name"
            },
            domain: {
                type: "string",
                title: "Domain"
            },
            appServiceName: {
                type: "string",
                title: "App Service Name",
                default: "nocodb"
            },
            appServiceImage: {
                type: "string",
                title: "App Service Image",
                default: "nocodb/nocodb:0.104.3"
            },
            databaseServiceName: {
                type: "string",
                title: "Database Service Name",
                default: "nocodb-db"
            },
            redisServiceName: {
                type: "string",
                title: "Redis Service Name",
                default: "nocodb-redis"
            }
        }
    },
    logo: "logo.png",
    screenshots: []
};


/***/ }),

/***/ 361:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O1": () => (/* binding */ randomString),
/* harmony export */   "l8": () => (/* reexport safe */ _schema__WEBPACK_IMPORTED_MODULE_2__.l8)
/* harmony export */ });
/* unused harmony export bcryptHash */
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(432);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(113);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(517);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schema__WEBPACK_IMPORTED_MODULE_2__]);
_schema__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const randomString = (length = 10)=>(0,crypto__WEBPACK_IMPORTED_MODULE_1__.randomBytes)(Math.round(length / 2)).toString("hex")
;
const bcryptHash = (input)=>hashSync(input)
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 517:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l8": () => (/* binding */ randomPassword)
/* harmony export */ });
/* unused harmony exports projectNameRule, serviceNameRule, volumeNameRule, domainRule, portRule, passwordRule, appMountsSchema, appDeploySchema, appBasicAuthSchema, appSourceSchema, appBuildSchema, resourcesSchema, appPortsSchema, appSchema, mongoSchema, mysqlSchema, mariadbSchema, postgresSchema, redisSchema, templateSchema */
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(113);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_1__]);
zod__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const randomPassword = ()=>(0,crypto__WEBPACK_IMPORTED_MODULE_0__.randomBytes)(10).toString("hex")
;
const projectNameRule = zod__WEBPACK_IMPORTED_MODULE_1__.z.string().regex(/^[a-z0-9-_]+$/, "Invalid name. Use lowercase letters (a-z), digits (0-9), dash (-), underscore (_).");
const serviceNameRule = zod__WEBPACK_IMPORTED_MODULE_1__.z.string().regex(/^[a-z0-9-_]+$/, "Invalid name. Use lowercase letters (a-z), digits (0-9), dash (-), underscore (_).");
const volumeNameRule = zod__WEBPACK_IMPORTED_MODULE_1__.z.string().regex(/^[a-z0-9-_]+$/, "Invalid name. Use lowercase letters (a-z), digits (0-9), dash (-), underscore (_).");
const domainRule = zod__WEBPACK_IMPORTED_MODULE_1__.z.string().regex(/^[a-z0-9.-]+$/);
const portRule = zod__WEBPACK_IMPORTED_MODULE_1__.z.number().min(0).max(65535);
const passwordRule = zod__WEBPACK_IMPORTED_MODULE_1__.z.string().default(randomPassword);
const appMountsSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.array(zod__WEBPACK_IMPORTED_MODULE_1__.z.union([
    zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
        type: zod__WEBPACK_IMPORTED_MODULE_1__.z.literal("bind"),
        hostPath: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1),
        mountPath: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1)
    }),
    zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
        type: zod__WEBPACK_IMPORTED_MODULE_1__.z.literal("volume"),
        name: volumeNameRule,
        mountPath: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1)
    }),
    zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
        type: zod__WEBPACK_IMPORTED_MODULE_1__.z.literal("file"),
        content: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),
        mountPath: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1)
    }), 
])).default([]);
const appDeploySchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    replicas: zod__WEBPACK_IMPORTED_MODULE_1__.z.number().default(1),
    command: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().nullable().default(null),
    zeroDowntime: zod__WEBPACK_IMPORTED_MODULE_1__.z.boolean().default(true),
    capAdd: zod__WEBPACK_IMPORTED_MODULE_1__.z.array(zod__WEBPACK_IMPORTED_MODULE_1__.z.string()).optional(),
    capDrop: zod__WEBPACK_IMPORTED_MODULE_1__.z.array(zod__WEBPACK_IMPORTED_MODULE_1__.z.string()).optional(),
    sysctls: zod__WEBPACK_IMPORTED_MODULE_1__.z.record(zod__WEBPACK_IMPORTED_MODULE_1__.z.string(), zod__WEBPACK_IMPORTED_MODULE_1__.z.string()).optional()
}).default({});
const appBasicAuthSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.array(zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    username: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),
    password: zod__WEBPACK_IMPORTED_MODULE_1__.z.string()
})).optional();
const appSourceSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.union([
    zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
        type: zod__WEBPACK_IMPORTED_MODULE_1__.z.literal("image"),
        image: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),
        username: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        password: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional()
    }),
    zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
        type: zod__WEBPACK_IMPORTED_MODULE_1__.z.literal("github"),
        owner: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1),
        repo: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1),
        ref: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1),
        path: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().regex(/^\//),
        autoDeploy: zod__WEBPACK_IMPORTED_MODULE_1__.z.boolean()
    }), 
]).optional();
const appBuildSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.union([
    zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
        type: zod__WEBPACK_IMPORTED_MODULE_1__.z.literal("dockerfile"),
        file: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional()
    }),
    zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
        type: zod__WEBPACK_IMPORTED_MODULE_1__.z.literal("heroku-buildpacks")
    }),
    zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
        type: zod__WEBPACK_IMPORTED_MODULE_1__.z.literal("paketo-buildpacks")
    }),
    zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
        type: zod__WEBPACK_IMPORTED_MODULE_1__.z.literal("nixpacks")
    }), 
]).optional();
const resourcesSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    memoryReservation: zod__WEBPACK_IMPORTED_MODULE_1__.z.number(),
    memoryLimit: zod__WEBPACK_IMPORTED_MODULE_1__.z.number(),
    cpuReservation: zod__WEBPACK_IMPORTED_MODULE_1__.z.number(),
    cpuLimit: zod__WEBPACK_IMPORTED_MODULE_1__.z.number()
}).optional();
const appPortsSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.array(zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    published: zod__WEBPACK_IMPORTED_MODULE_1__.z.number(),
    target: zod__WEBPACK_IMPORTED_MODULE_1__.z.number(),
    protocol: zod__WEBPACK_IMPORTED_MODULE_1__.z.union([
        zod__WEBPACK_IMPORTED_MODULE_1__.z.literal("tcp"),
        zod__WEBPACK_IMPORTED_MODULE_1__.z.literal("udp")
    ]).default("tcp")
})).default([]);
const appSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    projectName: projectNameRule,
    serviceName: serviceNameRule,
    source: appSourceSchema,
    build: appBuildSchema,
    env: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().default(""),
    proxy: zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
        port: zod__WEBPACK_IMPORTED_MODULE_1__.z.number().default(80),
        secure: zod__WEBPACK_IMPORTED_MODULE_1__.z.boolean().default(true)
    }).default({}),
    basicAuth: appBasicAuthSchema,
    deploy: appDeploySchema,
    domains: zod__WEBPACK_IMPORTED_MODULE_1__.z.array(zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
        name: domainRule
    })).default([]),
    mounts: appMountsSchema,
    ports: appPortsSchema,
    resources: resourcesSchema
});
const mongoSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    projectName: projectNameRule,
    serviceName: serviceNameRule,
    image: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
    password: passwordRule,
    resources: resourcesSchema
});
const mysqlSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    projectName: projectNameRule,
    serviceName: serviceNameRule,
    image: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
    password: passwordRule,
    rootPassword: passwordRule,
    resources: resourcesSchema
});
const mariadbSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    projectName: projectNameRule,
    serviceName: serviceNameRule,
    image: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
    password: passwordRule,
    rootPassword: passwordRule,
    resources: resourcesSchema
});
const postgresSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    projectName: projectNameRule,
    serviceName: serviceNameRule,
    image: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
    password: passwordRule,
    resources: resourcesSchema
});
const redisSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    projectName: projectNameRule,
    serviceName: serviceNameRule,
    image: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
    password: passwordRule,
    resources: resourcesSchema
});
const templateSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    services: zod__WEBPACK_IMPORTED_MODULE_1__.z.array(zod__WEBPACK_IMPORTED_MODULE_1__.z.union([
        zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
            type: zod__WEBPACK_IMPORTED_MODULE_1__.z.literal("app"),
            data: appSchema
        }),
        zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
            type: zod__WEBPACK_IMPORTED_MODULE_1__.z.literal("mysql"),
            data: mysqlSchema
        }),
        zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
            type: zod__WEBPACK_IMPORTED_MODULE_1__.z.literal("mariadb"),
            data: mariadbSchema
        }),
        zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
            type: zod__WEBPACK_IMPORTED_MODULE_1__.z.literal("mongo"),
            data: mongoSchema
        }),
        zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
            type: zod__WEBPACK_IMPORTED_MODULE_1__.z.literal("postgres"),
            data: postgresSchema
        }),
        zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
            type: zod__WEBPACK_IMPORTED_MODULE_1__.z.literal("redis"),
            data: redisSchema
        }), 
    ]))
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
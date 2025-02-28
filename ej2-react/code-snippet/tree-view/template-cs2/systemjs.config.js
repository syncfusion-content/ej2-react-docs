System.config({
    transpiler: "ts",
    typescriptOptions: {
        target: "es5",
        module: "system",
        moduleResolution: "node",
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        "jsx": "react",
        noEmitOnError: true,
        typeRoots: ["node_modules/@types"]
    },
    meta: {
        'typescript': {
            "exports": "ts"
        }
    },
    paths: {
        "syncfusion:": "https://cdn.syncfusion.com/ej2/28.2.6/"
    },
    map: {
        app: 'app',
        'typescript': 'https://unpkg.com/typescript@4.7.4/lib/typescript.js',
        'ts': 'https://unpkg.com/plugin-typescript@8.0.0/lib/plugin.js',
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",

        "@syncfusion/ej2-react-base": "syncfusion:ej2-react-base/dist/ej2-react-base.umd.min.js",
        "@syncfusion/ej2-react-navigations": "syncfusion:ej2-react-navigations/dist/ej2-react-navigations.umd.min.js",
        "react": "https://unpkg.com/react@16.14.0/umd/react.production.min.js",
        "react-dom": "https://unpkg.com/react-dom@16.14.0/umd/react-dom.production.min.js",
  
    },
    packages: {
        'app': { main: 'index', defaultExtension: 'tsx' },
    }

});

System.import('app');
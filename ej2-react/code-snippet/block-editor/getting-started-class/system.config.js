System.config({
    transpiler: "ts",
    typescriptOptions: {
        target: "es5",
        module: "commonjs",
        moduleResolution: "node",
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        "jsx": "react"
    },
    meta: {
        'typescript': {
            "exports": "ts"
        }
    },
    paths: {
        "syncfusion:": "https://cdn.syncfusion.com/ej2/20.3.56/"
    },
    map: {
        app: 'app',
        ts: "https://unpkg.com/plugin-typescript@4.0.10/lib/plugin.js",
        typescript: "https://unpkg.com/typescript@2.2.2/lib/typescript.js",
       "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-dropdowns":"syncfusion:ej2-dropdowns/dist/ej2-dropdowns.umd.min.js",
        "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
        "@syncfusion/ej2-notifications": "syncfusion:ej2-notifications/dist/ej2-notifications.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-blockeditor": "syncfusion:ej2-blockeditor/dist/ej2-blockeditor.umd.min.js",
        "react-dom":"https://unpkg.com/react-dom@16.3.1/umd/react-dom.development.js",
        "react":"https://unpkg.com/react@16.3.1/umd/react.development.js",

    },
    packages: {
        'app': { main: 'index', defaultExtension: 'tsx' },
    }

});

System.import('app');
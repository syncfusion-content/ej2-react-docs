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
        "@syncfusion/ej2-pdf-export": "syncfusion:ej2-pdf-export/dist/ej2-pdf-export.umd.min.js",
        "@syncfusion/ej2-file-utils": "syncfusion:ej2-file-utils/dist/ej2-file-utils.umd.min.js",
        "@syncfusion/ej2-compression": "syncfusion:ej2-compression/dist/ej2-compression.umd.min.js",
        "@syncfusion/ej2-svg-base": "syncfusion:ej2-svg-base/dist/ej2-svg-base.umd.min.js",
        "@syncfusion/ej2-treemap": "syncfusion:ej2-treemap/dist/ej2-treemap.umd.min.js",
        "@syncfusion/ej2-react-base": "syncfusion:ej2-react-base/dist/ej2-react-base.umd.min.js",
        "@syncfusion/ej2-react-data": "syncfusion:ej2-react-data/dist/ej2-react-data.umd.min.js",
        "@syncfusion/ej2-react-pdf-export": "syncfusion:ej2-react-pdf-export/dist/ej2-react-pdf-export.umd.min.js",
        "@syncfusion/ej2-react-file-utils": "syncfusion:ej2-react-file-utils/dist/ej2-react-file-utils.umd.min.js",
        "@syncfusion/ej2-react-compression": "syncfusion:ej2-react-compression/dist/ej2-react-compression.umd.min.js",
        "@syncfusion/ej2-react-svg-base": "syncfusion:ej2-react-svg-base/dist/ej2-react-svg-base.umd.min.js",
        "@syncfusion/ej2-react-treemap": "syncfusion:ej2-react-treemap/dist/ej2-react-treemap.umd.min.js",
"react-dom":"https://unpkg.com/react-dom@16.3.1/umd/react-dom.development.js",
"react":"https://unpkg.com/react@16.3.1/umd/react.development.js",
        
    },
    packages: {
        'app': { main: 'index', defaultExtension: 'tsx' },
    }
    
});

System.import('app');




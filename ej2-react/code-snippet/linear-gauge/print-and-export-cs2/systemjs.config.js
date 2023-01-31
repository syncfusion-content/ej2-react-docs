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
        "syncfusion:": "https://cdn.syncfusion.com/ej2/20.3.56/"},
    map: {
        app: 'app',
        ts: "https://unpkg.com/plugin-typescript@4.0.10/lib/plugin.js",
        typescript: "https://unpkg.com/typescript@2.2.2/lib/typescript.js",
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
		"@syncfusion/ej2-svg-base": "syncfusion:ej2-svg-base/dist/ej2-svg-base.umd.min.js",
        "@syncfusion/ej2-lineargauge": "syncfusion:ej2-lineargauge/dist/ej2-lineargauge.umd.min.js",
        "@syncfusion/ej2-react-base": "syncfusion:ej2-react-base/dist/ej2-react-base.umd.min.js",
        "@syncfusion/ej2-react-buttons": "syncfusion:ej2-react-buttons/dist/ej2-react-buttons.umd.min.js",
        "@syncfusion/ej2-react-popups": "syncfusion:ej2-react-popups/dist/ej2-react-popups.umd.min.js",
        "@syncfusion/ej2-pdf-export": "syncfusion:ej2-pdf-export/dist/ej2-pdf-export.umd.min.js",
        "@syncfusion/ej2-file-utils": "syncfusion:ej2-file-utils/dist/ej2-file-utils.umd.min.js",
        "@syncfusion/ej2-compression": "syncfusion:ej2-compression/dist/ej2-compression.umd.min.js",
        "@syncfusion/ej2-react-lineargauge": "syncfusion:ej2-react-lineargauge/dist/ej2-react-lineargauge.umd.min.js",
"react-dom":"https://unpkg.com/react-dom@16.3.1/umd/react-dom.development.js",
"react":"https://unpkg.com/react@16.3.1/umd/react.development.js",
        
    },
    packages: {
        'app': { main: 'index', defaultExtension: 'tsx' },
    }
    
});

System.import('app');




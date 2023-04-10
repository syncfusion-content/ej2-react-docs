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
        "@syncfusion/ej2-charts": "syncfusion:ej2-charts/dist/ej2-charts.umd.min.js",
        "@syncfusion/ej2-pdf-export": "syncfusion:ej2-pdf-export/dist/ej2-pdf-export.umd.min.js",
        "@syncfusion/ej2-file-utils": "syncfusion:ej2-file-utils/dist/ej2-file-utils.umd.min.js",
        "@syncfusion/ej2-compression": "syncfusion:ej2-compression/dist/ej2-compression.umd.min.js",
        "@syncfusion/ej2-react-base": "syncfusion:ej2-react-base/dist/ej2-react-base.umd.min.js",
<<<<<<< HEAD:ej2-react/code-snippet/heatmap/axis-cs13/systemjs.config.js
        "@syncfusion/ej2-react-data": "syncfusion:ej2-react-data/dist/ej2-react-data.umd.min.js",
        "@syncfusion/ej2-react-pdf-export": "syncfusion:ej2-react-pdf-export/dist/ej2-react-pdf-export.umd.min.js",
        "@syncfusion/ej2-react-file-utils": "syncfusion:ej2-react-file-utils/dist/ej2-react-file-utils.umd.min.js",
        "@syncfusion/ej2-react-compression": "syncfusion:ej2-react-compression/dist/ej2-react-compression.umd.min.js",
        "@syncfusion/ej2-react-svg-base": "syncfusion:ej2-react-svg-base/dist/ej2-react-svg-base.umd.min.js",
        "@syncfusion/ej2-react-heatmap": "syncfusion:ej2-react-heatmap/dist/ej2-react-heatmap.umd.min.js",
        "react-dom": "https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js",
        "react": "https://unpkg.com/react@18.2.0/umd/react.production.min.js"
=======
        "@syncfusion/ej2-react-charts": "syncfusion:ej2-react-charts/dist/ej2-react-charts.umd.min.js",
        "@syncfusion/ej2-react-buttons": "syncfusion:ej2-react-buttons/dist/ej2-react-buttons.umd.min.js",
        "@syncfusion/ej2-react-popups": "syncfusion:ej2-react-popups/dist/ej2-react-popups.umd.min.js",
        "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
        "@syncfusion/ej2-calendars": "syncfusion:ej2-calendars/dist/ej2-calendars.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-svg-base": "syncfusion:ej2-svg-base/dist/ej2-svg-base.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
"react-dom":"https://unpkg.com/react-dom@16.3.1/umd/react-dom.development.js",
"react":"https://unpkg.com/react@16.3.1/umd/react.development.js",
        
>>>>>>> 8fa149af7f11d8b79e609ae9f0a356ed2d1e9946:ej2-react/code-snippet/chart/series/stackedcolumn-cs/systemjs.config.js
    },
    packages: {
        'app': { main: 'index', defaultExtension: 'tsx' },
    }
    
});

System.import('app');




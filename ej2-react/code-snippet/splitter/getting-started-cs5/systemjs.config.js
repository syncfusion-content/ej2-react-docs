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
		"@syncfusion/ej2-layouts": "syncfusion:ej2-layouts/dist/ej2-layouts.umd.min.js",

    "react-dom":"https://unpkg.com/react-dom@16.8.0/umd/react-dom.development.js",
    "react":"https://unpkg.com/react@16.8.0/umd/react.development.js",
		"@syncfusion/ej2-react-base": "syncfusion:ej2-react-base/dist/ej2-react-base.umd.min.js",
		"@syncfusion/ej2-react-layouts": "syncfusion:ej2-react-layouts/dist/ej2-react-layouts.umd.min.js"
        
    },
    packages: {
        'app': { main: 'index', defaultExtension: 'tsx' },
    }
    
});

System.import('app');




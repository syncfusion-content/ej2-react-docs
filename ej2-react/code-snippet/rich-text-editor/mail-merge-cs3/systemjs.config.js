System.config({
  transpiler: "ts",
  typescriptOptions: {
    target: "es2017",
    module: "system",               // <-- SystemJS needs "system"
    moduleResolution: "node",
    jsx: "react",
    allowSyntheticDefaultImports: true,
    esModuleInterop: true,
    experimentalDecorators: true,
    emitDecoratorMetadata: true
  },

  meta: {
    'typescript': { exports: "ts" },
    '*.tsx': { loader: 'ts' }
  },

  paths: { "syncfusion:": "https://cdn.syncfusion.com/ej2/20.3.56/" },

  map: {
    app: 'app',
    ts: 'https://unpkg.com/plugin-typescript@8.0.0/lib/plugin.js',
    typescript: 'https://unpkg.com/typescript@4.9.5/lib/typescript.js',

    // ---- CORE PACKAGES (unchanged) ----
    "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
    "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
    "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
    "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
    "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
    "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
    "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
    "@syncfusion/ej2-layouts": "syncfusion:ej2-layouts/dist/ej2-layouts.umd.min.js",
    "@syncfusion/ej2-dropdowns": "syncfusion:ej2-dropdowns/dist/ej2-dropdowns.umd.min.js",
    "@syncfusion/ej2-grids": "syncfusion:ej2-grids/dist/ej2-grids.umd.min.js",
    "@syncfusion/ej2-calendars": "syncfusion:ej2-calendars/dist/ej2-calendars.umd.min.js",
    "@syncfusion/ej2-excel-export": "syncfusion:ej2-excel-export/dist/ej2-excel-export.umd.min.js",
    "@syncfusion/ej2-pdf-export": "syncfusion:ej2-pdf-export/dist/ej2-pdf-export.umd.min.js",
    "@syncfusion/ej2-compression": "syncfusion:ej2-compression/dist/ej2-compression.umd.min.js",
    "@syncfusion/ej2-file-utils": "syncfusion:ej2-file-utils/dist/ej2-file-utils.umd.min.js",
    "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
    "@syncfusion/ej2-filemanager": "syncfusion:ej2-filemanager/dist/ej2-filemanager.umd.min.js",
    "@syncfusion/ej2-richtexteditor": "syncfusion:ej2-richtexteditor/dist/ej2-richtexteditor.umd.min.js",
    "@syncfusion/ej2-notifications": "syncfusion:ej2-notifications/dist/ej2-notifications.umd.min.js",

    // ---- REACT WRAPPERS (CORRECTED) ----
    "@syncfusion/ej2-react-base": "syncfusion:ej2-react-base/dist/ej2-react-base.umd.min.js",
    "@syncfusion/ej2-react-popups": "syncfusion:ej2-react-popups/dist/ej2-react-popups.umd.min.js",
    "@syncfusion/ej2-react-dropdowns": "syncfusion:ej2-react-dropdowns/dist/ej2-react-dropdowns.umd.min.js",
    "@syncfusion/ej2-react-buttons": "syncfusion:ej2-react-buttons/dist/ej2-react-buttons.umd.min.js",
    "@syncfusion/ej2-react-splitbuttons": "syncfusion:ej2-react-splitbuttons/dist/ej2-react-splitbuttons.umd.min.js",
    "@syncfusion/ej2-react-richtexteditor": "syncfusion:ej2-react-richtexteditor/dist/ej2-react-richtexteditor.umd.min.js",

    "react": "https://unpkg.com/react@16.14.0/umd/react.development.js",
    "react-dom": "https://unpkg.com/react-dom@16.14.0/umd/react-dom.development.js"
  },

  packages: {
    'app': { main: 'index', defaultExtension: 'tsx' }
  }
});

System.import('app');
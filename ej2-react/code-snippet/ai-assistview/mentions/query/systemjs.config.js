System.config({
  transpiler: "ts",
  typescriptOptions: {
    target: "es5",
    module: "commonjs",
    moduleResolution: "node",
    jsx: "react",
  },
  paths: { "syncfusion:": "https://cdn.syncfusion.com/ej2/20.3.56/" },
  map: {
    app: "app",
    ts: "https://unpkg.com/plugin-typescript@4.0.10/lib/plugin.js",
    typescript: "https://unpkg.com/typescript@2.2.2/lib/typescript.js",
    "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
    "@syncfusion/ej2-react-base":
      "syncfusion:ej2-react-base/dist/ej2-react-base.umd.min.js",
    "@syncfusion/ej2-react-interactive-chat":
      "syncfusion:ej2-react-interactive-chat/dist/ej2-react-interactive-chat.umd.min.js",
    "react-dom":
      "https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js",
    react: "https://unpkg.com/react@18.2.0/umd/react.production.min.js",
  },
  packages: { app: { main: "index", defaultExtension: "tsx" } },
});
System.import("app");

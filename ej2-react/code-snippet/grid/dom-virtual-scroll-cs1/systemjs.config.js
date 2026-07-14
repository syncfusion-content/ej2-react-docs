System.config({
    transpiler: 'plugin-babel',
    babelOptions: {
        react: true
    },
    map: {
        'plugin-babel': 'https://cdn.syncfusion.com/ej2/20.3.53/system/plugin-babel.min.js',
        'systemjs-plugin-css': 'https://cdn.syncfusion.com/ej2/20.3.53/system/systemjs-plugin-css.js',
        '@syncfusion/ej2-base': 'https://cdn.syncfusion.com/ej2/32.1.19/dist/ej2-base.umd.min.js',
        '@syncfusion/ej2-buttons': 'https://cdn.syncfusion.com/ej2/32.1.19/dist/ej2-buttons.umd.min.js',
        '@syncfusion/ej2-calendars': 'https://cdn.syncfusion.com/ej2/32.1.19/dist/ej2-calendars.umd.min.js',
        '@syncfusion/ej2-dropdowns': 'https://cdn.syncfusion.com/ej2/32.1.19/dist/ej2-dropdowns.umd.min.js',
        '@syncfusion/ej2-data': 'https://cdn.syncfusion.com/ej2/32.1.19/dist/ej2-data.umd.min.js',
        '@syncfusion/ej2-inputs': 'https://cdn.syncfusion.com/ej2/32.1.19/dist/ej2-inputs.umd.min.js',
        '@syncfusion/ej2-navigations': 'https://cdn.syncfusion.com/ej2/32.1.19/dist/ej2-navigations.umd.min.js',
        '@syncfusion/ej2-popups': 'https://cdn.syncfusion.com/ej2/32.1.19/dist/ej2-popups.umd.min.js',
        '@syncfusion/ej2-splitbuttons': 'https://cdn.syncfusion.com/ej2/32.1.19/dist/ej2-splitbuttons.umd.min.js',
        '@syncfusion/ej2-notifications': 'https://cdn.syncfusion.com/ej2/32.1.19/dist/ej2-notifications.umd.min.js',
        '@syncfusion/ej2-grids': 'https://cdn.syncfusion.com/ej2/32.1.19/dist/ej2-grids.umd.min.js',
        '@syncfusion/ej2-react-base': 'https://cdn.syncfusion.com/ej2/32.1.19/dist/ej2-react-base.umd.min.js',
        '@syncfusion/ej2-react-grids': 'https://cdn.syncfusion.com/ej2/32.1.19/dist/ej2-react-grids.umd.min.js',
        'react': 'https://cdn.syncfusion.com/ej2/20.3.53/dist/react.min.js',
        'react-dom': 'https://cdn.syncfusion.com/ej2/20.3.53/dist/react-dom.min.js',
        'prop-types': 'https://cdn.syncfusion.com/ej2/20.3.53/dist/prop-types.min.js'
    },
    packages: {
        '':{
            defaultExtension: 'jsx'
        }
    }
});

System.import('app/App.jsx').catch(console.error.bind(console));

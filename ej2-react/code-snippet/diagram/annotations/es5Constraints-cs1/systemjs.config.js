/**
 * System configuration for Essential JS 2 React samples
 */
window.config = {
    transpiler: 'typescript',
    typescriptOptions: {
        module: 'commonjs',
        moduleResolution: 'node',
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        target: 'es5',
        jsx: 'react'
    },
    map: {
        npm: 'https://cdn.syncfusion.com/ej2/npm/',
        react: 'react',
        'react-dom': 'react-dom'
    },
    packages: {
        'app': { main: 'index', defaultExtension: 'ts' },
        react: { main: 'index.js' },
        'react-dom': { main: 'index.js' }
    }
};

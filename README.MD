# Meta SPA Webpack Plugin (WIP)

This plugin helps webpack emit Meta SPA compatible bundle files.

## Usage

- Installation
```bash
npm install -D @metaspa/meta-spa-webpack-plugin
```

- Add to your webpack config (commonjs style)
- Be careful this plugin will modified your output target and externals config. The original webpack config about output target and externals will not affect the final build result
```js
const MetaSPAPlugin = require('@metaspa/meta-spa-webpack-plugin').default

module.export = {
    ...
    plugins: [
        new MetaSPAPlugin({
            namespace: 'AppName',
            provide: [
                {module: 'react', symbol: 'React'}
            ]
        })
    ]
}
```

const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react("resources/js/app.js", "public/js") // aqui era app o index?
    .sass("resources/js/assets/styles/base.scss", "public/css")
    .webpackConfig({
        resolve: {
            alias: {
                assets: path.resolve(__dirname, "resources/js/assets"),
                components: path.resolve(__dirname, "resources/js/components"),
                pages: path.resolve(__dirname, "resources/js/pages"),
                stores: path.resolve(__dirname, "resources/js/stores")
            }
        }
    });

if (mix.inProduction()) {
    mix.version();
}

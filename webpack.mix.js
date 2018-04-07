let mix = require('laravel-mix');

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

 /*.copy('node_modules/rpg-awesome/fonts', 'public/fonts/rpg-awesome');*/

mix.react('frontend/UI/react/app.js', 'public/js')
   .sass('frontend/UI/sass/app.scss', 'public/css');









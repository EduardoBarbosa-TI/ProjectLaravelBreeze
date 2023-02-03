const mix = require('laravel-mix');

mix
    .sass('resources/css/estilos.scss', 'public/css')
    .js('resource/js/app.js', 'public/js')
    
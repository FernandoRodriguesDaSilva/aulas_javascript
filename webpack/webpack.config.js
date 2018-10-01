const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    // modo
    mode: modoDev ? 'development' : 'production',
    // entrada
    entry: './src/principal.js',
    // saida
    output: {
        filename: 'principal.js',
        // pasta de destino para os arquivos gerados
        path: __dirname + '/public'
    },
// Configuração do servidor 
devServer: {
    contentBase: "./public",
    port: 8080
},

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCssAssetsPlugin({})
        ]
    },
    // Apenas plugins 
    plugins: [
        new MiniCssExtractPlugin({
            // nome do arquivo que vai ser gerado
            filename: "estilo.css"
        })
    ],

    // modulo responsavel por ler arquivos css
    module: {
        rules: [{
            // expressão que funciona em .css .scss .sass
            test: /\.s?[ac]ss$/,
            // plugin para ler .css
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', // Adiciona css a Dom
                'css-loader', // interpreta @import, url()...
                'sass-loader'
            ]
        }, {
            // definindo regras para arquivos de imagens
            test: /\.(png|svg|jpg|gif|mp3|mp4)$/,
            use: ['file-loader']
        }]
    }
}
const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

const prodPlugin = [
    new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, 'dist'),
        // Required - Routes to render.
        routes: [ '/', '/todos', '/add', '/todos/completed' ],
        renderer: new Renderer({
            renderAfterElementExists: '#app',
            // headless: false // Display the browser window when rendering. Useful for debugging.
        })
    })
]

module.exports = {
    configureWebpack: config  => {
        if (process.env.NODE_ENV === 'production') {
            config.plugins.push(...prodPlugin) 
        } else return;
    }
  }
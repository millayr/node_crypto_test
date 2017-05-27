requirejs.config({
  baseUrl: '/client/app',
  paths: {
    jQuery: '../../node_modules/jquery/dist/jquery.min',
    wgfetch: '../../node_modules/whatwg-fetch/fetch',
    forge: '../../node_modules/node-forge/dist/forge.min'
  }
});

requirejs(['main']);

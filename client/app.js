requirejs.config({
  baseUrl: '/client/app',
  paths: {
    jQuery: '../../node_modules/jquery/dist/jquery.min',
    fetch: '../../node_modules/whatwg-fetch/fetch',
    forge: '../../node_modules/node-forge/dist/forge.min'
  }
});

requirejs(['main']);

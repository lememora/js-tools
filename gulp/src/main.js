requirejs.config({
  baseUrl: "./src",
  paths: {
    jquery: "../node_modules/jquery/dist/jquery"
  },
});

require(["jquery", "sum"], function ($, sum) {
  $('h1').html(sum(3, 4));
});

import $ from "./node_modules/jquery/dist/jquery";
import sum from "./sum";

$(document).ready(function() {
  $('h1').html(sum(3, 4));
});

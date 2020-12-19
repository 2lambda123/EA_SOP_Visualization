$(document).ready(function () {
  var file = $("script[dataFile][dataFile!=null]").attr("dataFile");
  console.log(file);
  evo = $("#main").evoAnimate({
    playOnLoad: true,
    sourceType: "URL",
    source: file,
    display: [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    evalStep: 2,
    canvasSize: [300, 300],
    fps: 120,
    fullPlayback: true,
    meshInitialDisplay: false,
    showPreviousLines: false,
    showInfoHead: true,
  });
});

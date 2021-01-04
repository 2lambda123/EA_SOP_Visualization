$(document).ready(function () {
  var file = $("script[dataFile][dataFile!=null]").attr("dataFile");
  console.log("File:" + file);
  var dataImageHitMap = $("script[dataImage][dataImage!=null]").attr("dataImage");
  console.log("dataImageHitMap:" + dataImageHitMap);
  evo = $("#main").evoAnimate({
    playOnLoad: true,
    sourceType: "URL",
    source: file,
    dataImage: dataImageHitMap,
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

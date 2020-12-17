$(document).ready(function () {
  evo = $("#main").evoAnimate({
    playOnLoad: true,
    sourceType: "URL",
    source: "data/jade_sphere_D10.txt",
    display: [[1, 2]],
    canvasSize: [600, 600],
    fps: 60,
    fullPlayback: true,
    meshInitialDisplay: true,
    showPreviousLines: false,
  });
});

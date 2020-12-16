$(document).ready(function () {
  evo = $("#main").evoAnimate({
    playOnLoad: true,
    sourceType: "URL",
    source: "../examples/RW_Sphere_D5.txt",
    display: [
      [1, 2],
      [3, 4],
    ],
    canvasSize: [600, 600],
    fps: 60,
    fullPlayback: true,
    meshInitialDisplay: true,
    showPreviousLines: false,
  });
});

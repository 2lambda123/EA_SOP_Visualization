$(document).ready(function () {
  evo = $("#main").evoAnimate({
    playOnLoad: true,
    sourceType: "URL",
    source: "../examples/RW_Sphere_D5.txt",
    display: [
      [1, 2],
      [3, 4],
    ],
    canvasSize: [300, 300],
    fps: 100,
    fullPlayback: true,
    meshInitialDisplay: false,
    showPreviousLines: false,
  });
});

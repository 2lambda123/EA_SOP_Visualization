$(document).ready(function () {
  evo = $("#main").evoAnimate({
    playOnLoad: true,
    sourceType: "URL",
    source: "data/RWSi_Sphere_D10.txt",
    display: [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10],
    ],
    canvasSize: [300, 300],
    fps: 2,
    fullPlayback: true,
    meshInitialDisplay: false,
    showPreviousLines: false,
  });
});

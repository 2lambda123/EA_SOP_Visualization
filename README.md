# Evolutionary algorithm progress visualization for single objective problems

Created as part of a [undergraduate thesis](https://dk.um.si/IzpisGradiva.php?id=68515&lang=eng).

## Input

- Use [EARS](https://github.com/UM-LPM/EARS) example to create input file [example](https://github.com/UM-LPM/EARS/blob/master/src/org/um/feri/analyse/sopvisualization/EA_SOP_VisualizationExample.java).

### Manual generator format

algID; algName;[algParams];problemID; problemName;problemDim;[problemParams]

\{id; generation; [parentids]; timestamp; eval; fitness; [x]\}\*

## GUI

Speed (10xslow), load, play

2dGraph [x_a,x_b] ali [fit, x_a]
More grafs;

## Usage info

Jquery plugin for animating data of evolutionary calculation algorithms
Prerequisites:

- Jquery ^3.1.0
- \*\* RAFPolyfill.js (request animation frame polyfill, if using older browsers) https://gist.github.com/paulirish/1579671

Init properties (OBJECT) containing:

- source string REQUIRED URL of the source file, or raw source data, depending on the settings (read below)
  URL SOURCE NOT YET IMPLEMENETED!
- sourceType string Optional Set type of source, defaults to "URL". Possible types: "URL", "STRING"
- playOnLoad bool Optional Defines if playback should start when plugin is done loading, defaults to true.
- display array Optional Defines how many (2 per canvas) and which X values to show
  Shows all combinations of X-es by default e.g.: If the problem has 3 dimensions -> [x1,x2], [x1,x3], [x2,x3]
  Defined as an array, where the first X is numbered as "1": [1,2] would display a canvas elements containing a graph, showing [x1,x2]
- To show multiple combinations define an array of arrays: [[1,2],[2,3]] -> [x1,x2] and [x2,x3]
- canvasSize array Optional Defines dimensions of each canvas seperately, or globally.
  If only an array of 2 integers is set, that will be considered as the dimension for all canvases: [300,300]
  You can also pass an array of arrays (Identical in size to the above "display" array!) that will set dimensions for each canvas seperately
- fps integer Optional Frames per second, defaults to 25

- shadingHistory boolean Optional Display or hide step history with shading, defaults to true
- fullPlayback boolean Optional Defaults to false, if set to true, playback will continue until the end of data
- shownGenerations integer Optional Defaults to 3, defines how many generations before the current one should be shown. 0 means all generations.
- meshColor string Optional Defaults to #e5e5e5, defines color of lines in the mesh on the canvas
- meshInitialDisplay boolean Optional Defaults to false, turns on mesh on all canvases upon load if set to true
- showPreviousLines boolean Optional Defaults to true, displays lines for steps before the last one

## Example configuration of plugin properties

```javascript
$('#selector').evoAnimate({
source: 'www.something.com/evolution.txt',
sourceType: 'URL',
playOnLoad: false,
display: [1,2],
fps: 25,
}};
```

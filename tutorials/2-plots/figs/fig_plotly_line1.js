
export function draw_fig(field) {
  Plotly.newPlot(field, [{
      x: [1, 2, 3, 4],
      y: [1, 2, 3, 4]
  }, {
      margin: {t: 0}
  }]);
}

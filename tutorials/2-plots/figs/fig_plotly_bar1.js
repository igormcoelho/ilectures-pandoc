
export function draw_fig(field) {
  Plotly.newPlot(field, [{
      x: ['giraffes', 'orangutans', 'monkeys'],
      y: [20, 14, 23],
      type: 'bar'
    }]);
}

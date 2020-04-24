import plotly.express as px
import plotly as plotly
import plotly.graph_objects as go

def draw_fig(filename):
	animals=['giraffes', 'orangutans', 'monkeys']
	fig = go.Figure([go.Bar(x=animals, y=[20, 14, 23])])
	fig.update_layout( margin=dict(l=0, r=0, t=50, b=0) )
	fig.write_image(filename)
	return fig

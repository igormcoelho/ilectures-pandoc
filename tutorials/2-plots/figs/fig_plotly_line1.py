import plotly.express as px
import plotly as plotly
import plotly.graph_objects as go
import pandas as pd

def draw_fig(filename):
	x= [1, 2, 3, 4]
	y= [1, 2, 3, 4]
	xy = pd.DataFrame({'vx':x, 'vy': y})
	fig = px.line(xy, x="vx", y="vy", title='Test', height=300)
	fig.update_layout( margin=dict(l=0, r=0, t=50, b=0) )
	fig.write_image(filename)
	return fig

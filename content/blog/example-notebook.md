---
article : true
author: "Antonino DiMaggio"
date: 2020-09-30
description: "Notebook to help me remember how to render a notebook as blog post"
draft: true
hasmath: true
linktitle: "Example Notebook"
tags:
  - example
title: "Example Notebook"
---


```python
%config InlineBackend.figure_format = 'retina'
import dataframe_image as dfi
import matplotlib as mpl
import matplotlib.image as mpimg
import matplotlib.pyplot as plt
import pandas as pd

plt.ion()

mpl.rcParams['figure.figsize'] = (10, 6)
mpl.rcParams['figure.titlesize'] = 16
mpl.rcParams['axes.labelsize'] = 14
mpl.rcParams['axes.titlesize'] = 16
mpl.rcParams['legend.fontsize'] = 14
mpl.rcParams['xtick.labelsize'] = 12
mpl.rcParams['ytick.labelsize'] = 12
```


```python
def hello_world():
    print('hello world')
```

Make sure that we put math in paragraph tags.

<p> $$\hat{y}_{t} = f(\mathbf{X}_{t})$$
$$\hat{y}_{t} = f(\mathbf{y}_{t^{\prime}\lt t-1})$$ </p>


```python
df = pd.read_csv('http://archive.ics.uci.edu/ml/machine-learning-databases/adult/adult.data', header=None)
df.iloc[0:10, 12].plot()
plt.show()
```


    
![png](images/example-notebook/example-notebook_4_0.png)
    



```python
def df_to_png(df, name):
    dfi.export(df, name)
    plt.imshow(mpimg.imread(name))
    plt.axis('off')
    plt.show()
    
df_to_png(df.head(), 'df_head.png')
```


    
![png](images/example-notebook/example-notebook_5_0.png)
    


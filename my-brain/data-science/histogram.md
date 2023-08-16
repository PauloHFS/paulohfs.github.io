---
id: histogram
title: Histogram
tags:
    - Data Science
    - Statistics
    - Histogram
    - Seaborn
---

# Histogram

Histogram is a graphical used to visualize the distribution of a numerical variable. It is a type of bar chart that shows the frequency of each value.

## histplot on Seaborn

The [`histplot`](https://seaborn.pydata.org/generated/seaborn.histplot.html?highlight=histplot#seaborn-histplot) function on Seaborn can be used to plot a histogram. This function allow us to normalize the statistics computed in each bin to estimate frequency, density or probability mass using the `stat` param, and it can also plot a smooth curve over the histogram using kernel density estimate using the `kde` param.

```py
import seaborn as sns
import numpy as np

# simple histogram
sns.histplot(data, x="column_name") # or
sns.histplot(data, y="column_name")

# you can change the bin width
sns.histplot(data, x="column_name", binwidth=30)

# you can change the bin number
sns.histplot(data, x="column_name", bins=30)
#you can use a bin range
sns.histplot(data, x="column_name", bins=[0, 10, 20, 30, 40, 50]) # or
sns.histplot(data, x="column_name", bins=range(0, 50, 10)) # or
sns.histplot(data, x="column_name", bins=np.range(0, 50, 10))

# with kde
sns.histplot(data, x="column_name", kde=True)

# you can plot a histogram for a categorical variable passing it on HUE
sns.histplot(data, x="column_name", hue="categorical_column_name")
# to better visualize the data, you can use the multiple param with on of {“layer”, “dodge”, “stack”, “fill”}
sns.histplot(data, x="column_name", hue="categorical_column_name", multiple="stack")

# you can use the stat param to normalize the statistics computed in each bin to estimate frequency, density or probability mass
sns.histplot(data, x="column_name", stat="density")

# you can pass one of {“bars”, “step”, “poly”} to element param to change the element used to draw the histogram
sns.histplot(data, x="column_name", element="poly")

# you can shrink the width of each bin to leave some space between adjacent bins
sns.histplot(data, x="column_name", shrink=0.8)

# you can create a bivariate histogram passing two columns
sns.histplot(data, x="column_1_name", y="column_2_name")
```

## References

[Python Seaborn - 9 | What is a Histogram and How to Draw it in Python using Seaborn](https://youtu.be/wyUluaQ-6oQ)

---
id: "outliers"
title: "Outliers"
tags: ["outliers", "data-preprocessing"]
---

Outliers are:

- Abnormal values
- non-standard values

This can be caused by:

- Errors in data collection
- By chance
- **Fraud**

How to deal with outliers:

- Remove
- Substitute/Transform
- Do nothing

## Detecting Outliers

### Boxplot

A boxplot is a graphical representation of the distribution of a dataset. It shows the median, quartiles, and outliers.

```python
import seaborn as sns

sns.boxplot(data=df, y='column')
```

### Scatter Plot

A scatter plot is a graphical representation of the relationship between two variables. Outliers can be identified as points that are far from the rest of the data.

```python
import matplotlib.pyplot as plt

plt.scatter(df['column1'], df['column2'])
```

### PyOD

[PyOD](https://pyod.readthedocs.io/en/latest/index.html) is a Python library for detecting outliers in multivariate data.

For each type use:

- Time-series outlier detection: TODS
- Graph outlier detection: PyGOD

#### Using KNN

```python
from pyod.models.knn import KNN

detector = KNN()
detector.fit(X)

detections = detector.labels_ # 0 for inliers, 1 for outliers

confidence = detector.decision_scores_ # Outlier scores

outliers_index = []
for i in range(len(prevision)):
    if detections[i] == 1:
        outliers.append(i)

outliers = X[outliers_index]
```

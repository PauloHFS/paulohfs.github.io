---
id: "feature-engineering-and-selection"
title: "Feature Engineering and Selection"
tags: [
  "machine-learning",
  "feature-engineering", "feature-selection", "data-preprocessing"]
---

It's note true that more atributtes will make a model better.
So we need to select the best features to use in our model.

## Low variance

Variance is a measure of how much the value is spread out (has a large range).
If a feature has a low variance, it means that the values are very similar.

We can use the `VarianceThreshold` class from `sklearn.feature_selection` to remove features with low variance.

```python
from sklearn.feature_selection import VarianceThreshold

# Create a VarianceThreshold object
selector = VarianceThreshold(threshold=0.2)

# Fit the object to the data
selector.fit(data)

# Get the indices of the features that are being kept
kept_indices = selector.get_support(indices=True)

# Get the names of the features that are being kept
kept_features = data.columns[kept_indices]

# Transform the data to only keep the selected features
data_selected = selector.transform(data)
```

To get the threshold value, we can use the `np.var` function from NumPy to calculate the variance of each feature.

```python
# Calculate the variance of each feature
variances = np.var(data, axis=0) # axis=0 calculates the variance of each column

# Get the names of the features with low variance
low_variance_features = data.columns[variances < 0.2]
```

## High correlation

Correlation is a measure of how much two variables change together.
If two features are highly correlated, they may contain redundant information.

We can use the `corr` method from a pandas DataFrame to calculate the correlation between features.

```python
# Calculate the correlation matrix
correlation_matrix = data.corr()

# Get the indices of the features that are highly correlated
highly_correlated_indices = np.where(np.abs(correlation_matrix) > 0.8)

# Get the names of the features that are highly correlated
highly_correlated_features = data.columns[highly_correlated_indices]
```

## Extra tree

Extra Trees is an ensemble learning method that fits multiple decision trees to the data and averages the predictions.
This uses the Extra Trees not for classification or regression, but to calculate the feature importance.

We can use the `ExtraTreesClassifier` and `ExtraTreesRegressor` classes from `sklearn.ensemble` to calculate the feature importance.

```python
from sklearn.ensemble import ExtraTreesClassifier

# Split the data into training and testing sets
data = df.drop('target', axis=1) # axis=1 drops the 'target' column
target = df['target']

# Create an ExtraTreesClassifier object
model = ExtraTreesClassifier(criterion='gini', random_state=42)

# Fit the model to the data
model.fit(data, target)

# Get the feature importances
feature_importances = model.feature_importances_

# Drop the features with low importance
data_selected = data.drop(data.columns[feature_importances < 0.1], axis=1)

# Get the names of the features with low importance
low_importance_features = data.columns[feature_importances < 0.1]
```

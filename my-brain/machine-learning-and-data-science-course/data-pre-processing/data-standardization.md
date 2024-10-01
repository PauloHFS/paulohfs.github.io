---
id: "data-standardization"
title: "Data Standardization"
---

Whem working with some algorithms, we need to standardize the data to a common scale, cause some algorithms are sensitive to the scale of the input data.

## Standardization

x = (x - mean(x)) / standard deviation(x)

Where:

- x is the original value
- mean(x) is the mean of the feature x
- standard deviation(x) is the standard deviation of the feature x

This is more robust to outliers than normalization.

```python
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()

# Fit the scaler to the data
scaler.fit(X_train)

# Transform the training and testing sets
X_train_scaled = scaler.transform(X_train)

X_test_scaled = scaler.transform(X_test)

# or in one step
X_train_scaled = scaler.fit_transform(X_train)
```

### Normalization

Normalization is another technique used to scale the data to a common scale. It scales the data to a fixed range, usually between 0 and 1.

x = (x - min(x)) / (max(x) - min(x))

Where:

- x is the original value
- min(x) is the minimum value of the feature x
- max(x) is the maximum value of the feature x

---
id: "categorical-variables"
title: "Categorical Variables"
---

To use some variables that are categorical we need to transform them into numerical values. This process is known as encoding or feature encoding.

### Label Encoding

Label encoding is a technique used to convert categorical variables into numerical values. It assigns a unique integer to each category in the variable.

```python
from sklearn.preprocessing import LabelEncoder

# Create a label encoder object
label_encoder = LabelEncoder()

# Fit the encoder to the data
data['category'] = label_encoder.fit_transform(data['category'])
```

### One-Hot Encoding

This technique is used to convert categorical variables into binary vectors. It creates a new binary column for each category in the variable.

```python
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer

# Create a column transformer object
column_transformer = ColumnTransformer(
    transformers=[
        ('encoder', OneHotEncoder(), ['category', 'category2'])
    ],
    remainder='passthrough' # Keep the remaining columns
)

# Fit the transformer to the data
data = column_transformer.fit_transform(data)
```

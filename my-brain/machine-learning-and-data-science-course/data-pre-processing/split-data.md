---
id: "split-data"
title: "Split Data"
---

We need to split the data in previsor variables and target variable. We will use the previsor variables to predict the target variable. The target variable is the variable we are trying to predict.

### Split Data

```python
import pandas as pd

# Load the dataset
data = pd.read_csv('data.csv')

# Split the data into previsor variables and target variable
X = data.drop('target', axis=1) # Previsor variables
y = data['target'] # Target variable
```

After splitting the data, we can further divide it into training and testing sets. The training set is used to train the machine learning model, while the testing set is used to evaluate its performance.

```python
from sklearn.model_selection import train_test_split

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
```
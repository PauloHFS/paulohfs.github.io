---
id: "dimensionality-reduction"
title: "Dimensionality Reduction"
tags: [
  "machine-learning",
  "dimensionality-reduction", "feature-selection", "feature-extraction"]
---

## Feature selection X Feature extraction

Feature selection is the process of selecting a subset of the most important features from a dataset.

Feature extraction is the process of creating new features from the existing features in a dataset. Dimensionality reduction techniques such as PCA and LDA are examples of feature extraction.

Dimensionality Reduction is the process of reducing the number of features in a dataset by selecting a subset of the most important features or by transforming the data into a lower-dimensional space.

## PCA

Principal Component Analysis (PCA) is a technique used to reduce the dimensionality of a dataset by transforming the data into a lower-dimensional space while preserving as much variance as possible.

PCA works indentifyng the correlation between the features and creating new features that are linear combinations of the original features.

```python
from sklearn.decomposition import PCA

# Create a PCA object
pca = PCA(n_components=6)

# Fit the object to the data and transform the data
X_pca = pca.fit_transform(X)
```

## Kernel PCA

Kernel PCA is an extension of PCA that uses kernel methods to perform non-linear dimensionality reduction.

Kernel PCA works by mapping the data into a higher-dimensional space using a kernel function and then performing PCA in the higher-dimensional space.

```python
from sklearn.decomposition import KernelPCA

# Create a KernelPCA object
kpca = KernelPCA(n_components=6, kernel='rbf')

# Fit the object to the data and transform the data
X_kpca = kpca.fit_transform(X)
```

`kernel='rbf'` is the Radial Basis Function (RBF) kernel, which is commonly used in Kernel PCA. This is a non-linear kernel that can capture complex patterns in the data.

## LDA

Linear Discriminant Analysis (LDA) is a technique used to reduce the dimensionality of a dataset by transforming the data into a lower-dimensional space while maximizing the separation between classes.

LDA works by finding the directions (linear discriminants) that maximize the separation between classes.

```python

from sklearn.discriminant_analysis import LinearDiscriminantAnalysis

# Create a LDA object
lda = LinearDiscriminantAnalysis(n_components=6)

# Fit the object to the data and transform the data
X_lda = lda.fit_transform(X, y)
```

---
id: "time-series"
title: "Time Series"
tags: ["time-series", "forecasting", "data-preprocessing"]
---

Time series data is a sequence of data points collected at regular intervals over time. It is used in various fields such as finance, economics, weather forecasting, and signal processing. Time series analysis involves analyzing, modeling, and forecasting the patterns in the data.

```python
import pandas as pd

data = {
    'Month': ['2021-01', '2021-02', '2021-03', '2021-04', '2021-05'],
    'value': [100, 120, 130, 140, 150]
}

df = pd.DataFrame(data)

dataparser = lambda date: pd.datetime.strptime(date, '%Y-%m')

# Load the data
# Month,Value
df = pd.read_csv('data.csv', parse_dates=['Month'], index_col='Month', date_parser=dataparser)

time_series = df['value']

# Query the data
time_series['2021-06']
time_series['2021-01':'2021-03']
time_series[:'2021-02']
time_series.max()

# Plot the data
time_series.plot()

# Group by year
time_series.resample('Y').sum()

# Group by month
time_series.resample('M').sum()
time_series.groupby(lambda x:x.month).sum()
```

## Time Series Decomposition

```python
from statsmodels.tsa.seasonal import seasonal_decompose

decomposition = seasonal_decompose(time_series)
tendency = decomposition.trend
seasonal = decomposition.seasonal
random = decomposition.resid
```

You can plot the components to visualize the decomposition.

## Predicting Time Series

### ARIMA (AutoRegressive Integrated Moving Average)

ARIMA is a popular time series forecasting model that combines autoregressive (AR), differencing (I), and moving average (MA) components.

```python
! pip install pmdarima
from pmdarima import auto_arima

# Fit the model
model = auto_arima(time_series)
# params order=(P, Q ,D). P is the order of the autoregressive part, Q is the order of the moving average part, and D is the order of the differencing. You need to find the best values for these parameters our use auto_arima to find the best values.

model.order

# Forecast the next 12 months
predictions = model.predict(n_periods=12)
```

### Split time series data

```python
train = time_series[:'2021-03']
test = time_series['2021-04':]
```

### Ploting the predictions

```python
import matplotlib.pyplot as plt

model = auto_arima(train)
predictions = model.predict(n_periods=len(test))

plt.plot(train.index, train, label='Train')
plt.plot(test.index, test, label='Test')
plt.plot(test.index, predictions, label='Predictions')
plt.legend()
plt.show();
```

## Prophet

Prophet is a forecasting tool developed by Facebook that is designed for analyzing time series data that display patterns on different time scales.

```python
! pip install fbprophet
from fbprophet import Prophet

# Load the data
data = {
    'ds': ['2021-01', '2021-02', '2021-03', '2021-04', '2021-05'],
    'y': [100, 120, 130, 140, 150]
}

df = pd.DataFrame(data)

model = Prophet()
model.fit(df)

future = model.make_future_dataframe(periods=12)
forecast = model.predict(future)

forecast.head()

model.plot(forecast)

model.plot_components(forecast)

# Plot the forecast using Plotly
from fbprophet.plot import plot_plotly, plot_components_plotly

plot_plotly(model, forecast)

plot_components_plotly(model, forecast)

```

- yhat: the forecasted value
- yhat_lower: the lower bound of the forecast
- yhat_upper: the upper bound of the forecast

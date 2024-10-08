---
id: "computer-vision"
title: "Computer Vision"
tags: [
  "machine-learning",
  "computer-vision", "image-processing", "deep-learning"]
---

Computer vision is a field of artificial intelligence that focuses on enabling computers to interpret and understand the visual world. It involves the development of algorithms and techniques that allow computers to extract information from images or videos.

- Object and face detection
- Face recognition
- Object tracking
- Image segmentation

### Cascade Classifiers

To work with Cascade Classifiers to face detection we need to have a dataset with faces and non-faces images.

We need to apply the `AdaBoost` algorithm to select the best features to use in the classifier.

The Classifier is a cascade of weak classifiers that are trained to detect faces.

There a lot of pre-trained models available in OpenCV.

## FAce Detection

```python
import cv2

# Load the pre-trained model
face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

# Load the image
image = cv2.imread('image.jpg')

# Convert the image to grayscale
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# Detect faces in the image
faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

# Draw rectangles around the faces
for (x, y, w, h) in faces:
    cv2.rectangle(image, (x, y), (x+w, y+h), (255, 0, 0), 2)

# Display the image
cv2.imshow('Faces', image)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

## Face Recognition

### LBPH (Local Binary Patterns Histograms)

The LBPH algorithm is a texture-based face recognition algorithm that works by extracting local binary patterns from an image and creating a histogram of these patterns.

```python
import cv2

# Load the pre-trained model
lbph = cv2.face.LBPHFaceRecognizer_create()

# Train the model
lbph.train(faces, labels)

# Save the model
lbph.write('lbph_model.xml')

# Load the model
lpbh = cv2.face.LBPHFaceRecognizer_create()
lbph.read('lbph_model.xml')

# Predict the label of a face
label, confidence = lbph.predict(face)
```

## Object Tracking

- More fast than object detection
- The object uses the previous position to predict the next position

### CSRT (Channel and Spatial Reliability Tracker)

The CSRT algorithm is a robust object tracking algorithm that uses the channel and spatial reliability of the object to track it.

```python
import cv2

# Load the pre-trained model
tracker = cv2.TrackerCSRT_create()

# Load the video
video = cv2.VideoCapture('video.mp4')

# Read the first frame
ok, frame = video.read()

# Select the object to track
bbox = cv2.selectROI(frame)

# Initialize the tracker
ok = tracker.init(frame, bbox)

# Track the object in the video
while True:
  ok, frame = video.read()
  if not ok:
    break

  # Update the tracker
  ok, bbox = tracker.update(frame)

  if ok:
    # Draw a rectangle around the object
    (x, y, w, h) = [int(v) for v in bbox]
    cv2.rectangle(frame, (x, y), (x+w, y+h), (255, 0, 0), 2)
  else:
    # Tracking failure
    cv2.putText(frame, 'Tracking failure detected', (100, 80), cv2.FONT_HERSHEY_SIMPLEX, 0.75, (0, 0, 255), 2)

  if cv2.waitKey(1) & 0xFF == 27:
    break
```

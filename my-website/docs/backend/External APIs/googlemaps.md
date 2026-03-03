---
sidebar_label: "Google Maps API"
sidebar_position: 2
---

# Google Maps API

Base URL:
https://maps.googleapis.com/

---

## InitMapView(coords object):
**GET:**
returns a mapview based around map coords
parameters: map coords
### Responses
- 200: map object
- 404: coords not found

## LocationIntoCoords(location address object):
**GET:** 
returns coords of location
parameters: location address
### Responses
- 200: geocode object
- 400: invalid address name (wrong datatype)
- 404: address not found

## NearbyLocations(coords object):
**GET:** 
returns list of location addresses
parameters: current location coords
### Responses
- 200: list of addresses (objects)
- 404: list not found

## MapMarkers():
**GET:** 
map marker functionality for mapview
parameters: coords for marker placement
### Responses
- 200: map markers on mapview
- 400: invalid coords

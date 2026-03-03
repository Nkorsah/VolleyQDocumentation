---
sidebar_label: "OpenAI API"
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
### responses:
- 200: map object
- 404: coords not found

## LocationIntoCoords(location address object):
**GET:** 
returns coords of location
parameters: location address
### responses:
- 200: geocode object
- 400: invalid address name (wrong datatype)
- 404: address not found

## NearbyLocations(coords object):
**GET:** 
returns list of location addresses
parameters: current location coords
### responses:
- 200: list of addresses (objects)
- 404: list not found

## MapMarkers():
**GET:** 
map marker functionality for mapview
parameters: coords for marker placement
### responses:
- 200: map markers on mapview
- 400: invalid coords

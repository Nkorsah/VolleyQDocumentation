---
sidebar_label: "Google Maps API"
sidebar_position: 1
---

# Google Maps API

Base URL:
https://maps.googleapis.com/

---

## InitMapView(coords)

**GET**

Returns a map view centered on coordinates.

### Responses
- 200: Map object
- 404: Coordinates not found

---

## LocationIntoCoords(location)

**GET**

Converts address into coordinates.

### Responses
- 200: Geocode object
- 400: Invalid datatype
- 404: Address not found
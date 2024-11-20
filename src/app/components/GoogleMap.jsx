import React from 'react';

export default function GoogleMap() {
    const mapStylesString = JSON.stringify([
        {
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }]
        },
        {
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }]
        },
        {
            elementType: "labels.text.fill",
            stylers: [{ color: "#616161" }]
        },
        {
            elementType: "labels.text.stroke",
            stylers: [{ color: "#f5f5f5" }]
        },
        {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [{ color: "#bdbdbd" }]
        },
        {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#eeeeee" }]
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#757575" }]
        },
        {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#e5e5e5" }]
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9e9e9e" }]
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#ffffff" }]
        },
        {
            featureType: "road.arterial",
            elementType: "labels.text.fill",
            stylers: [{ color: "#757575" }]
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#dadada" }]
        },
        {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#616161" }]
        },
        {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9e9e9e" }]
        },
        {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [{ color: "#e5e5e5" }]
        },
        {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [{ color: "#eeeeee" }]
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#c9c9c9" }]
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9e9e9e" }]
        }
    ]);

    return (
        <iframe
            src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3648.071491944234!2d64.41678824203451!3d39.747506806246854!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f500700139f797d%3A0x7eb6a3027814b0b0!2sAkbar%20SOFT!5e0!3m2!1sru!2sus!4v1732113585529!5m2!1sru!2sus${encodeURIComponent(
                mapStylesString
            )}`}
            width="100%"
            height="450"
            style={{ border: 0, filter: 'grayscale(100%) contrast(1.5)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    );

};
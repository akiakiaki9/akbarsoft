import React from 'react';

export default function GoogleMap() {

    return (
        <iframe
            src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3648.071491944234!2d64.41678824203451!3d39.747506806246854!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f500700139f797d%3A0x7eb6a3027814b0b0!2sAkbar%20SOFT!5e0!3m2!1sru!2sus!4v1732113585529!5m2!1sru!2sus${encodeURIComponent(
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
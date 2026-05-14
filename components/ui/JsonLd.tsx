import React from 'react';

interface LocalBusinessProps {
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry: string;
  };
  geo?: {
    latitude: string;
    longitude: string;
  };
  image: string;
  priceRange: string;
  openingHours?: string[];
  sameAs?: string[];
}

export default function JsonLdLocalBusiness({
  name,
  description,
  url,
  telephone,
  email,
  address,
  geo,
  image,
  priceRange,
  openingHours = ["Mo-Su 09:00-20:00"],
  sameAs = [],
}: LocalBusinessProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    description,
    url,
    telephone,
    email,
    image,
    priceRange,
    openingHoursSpecification: openingHours.map((oh) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: oh.split(' ')[1]?.split('-')[0] || '09:00',
      closes: oh.split(' ')[1]?.split('-')[1] || '20:00',
    })),
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    ...(geo && {
      geo: {
        '@type': 'GeoCoordinates',
        ...geo,
      },
    }),
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

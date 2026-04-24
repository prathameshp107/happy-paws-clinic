import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  schemaMarkup?: Record<string, unknown>;
}

const defaultTitle = "faunaPetcare Clinic — Premium Pet Healthcare in Pune";
const defaultDescription = "faunaPetcare Clinic offers premium veterinary care with compassion, expertise, and love. Book appointments, vaccinations, grooming, and more in Hadapsar, Pune.";
const defaultImage = "https://faunapetcareclinic.com/og-image.png";
const siteUrl = "https://faunapetcareclinic.com";

const SEO = ({
  title,
  description = defaultDescription,
  canonical,
  image = defaultImage,
  schemaMarkup
}: SEOProps) => {
  const fullTitle = title ? `${title} | faunaPetcare Clinic` : defaultTitle;
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  const localBusinessSchema = schemaMarkup || {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    "name": "faunaPetcare Clinic",
    "image": defaultImage,
    "url": siteUrl,
    "telephone": "+919923342709",
    "email": "faunapetcareclinic@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. 7, Eraville Complex, Survey No. 182, Tupe Patil Road, Behind Amanora Mall, Hadapsar",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411028",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.5163456,
      "longitude": 73.9386691
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "312"
    },
    "sameAs": [
      "https://www.instagram.com/faunapetcareclinic",
      "https://www.facebook.com/faunapetcareclinic"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="veterinary clinic, pet care, animal hospital, pet vaccination, pet grooming, pet surgery, Pune vet, Hadapsar clinic, faunaPetcare" />
      <meta name="author" content="faunaPetcare Clinic" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="faunaPetcare Clinic" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="msapplication-TileColor" content="#0ea5e9" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />

      {/* Geo Meta Tags */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Pune, Maharashtra" />
      <meta name="geo.position" content="18.5163456;73.9386691" />
      <meta name="ICBM" content="18.5163456, 73.9386691" />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PropertyDetail from '@/components/property/PropertyDetail';
import BookingSection from '@/components/property/BookingSection';
import ReviewSection from '@/components/property/ReviewSection';
import { properties } from '@/constants'; // assuming you have mock data

const PropertyPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const selected = properties.find((p) => p.id === id);
      setProperty(selected);
    }
  }, [id]);

  if (!property) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <PropertyDetail property={property} />
      <BookingSection />
      <ReviewSection reviews={property.reviews || []} />
    </div>
  );
};

export default PropertyPage;

import { NextResponse, NextRequest } from 'next/server';
import { MOCK_LISTINGS } from '../../../lib/mockData';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const propertyType = searchParams.get('property_type');
  const location = searchParams.get('location')?.toLowerCase().trim();
  const minPrice = searchParams.get('min_price') ? parseFloat(searchParams.get('min_price')!) : null;
  const maxPrice = searchParams.get('max_price') ? parseFloat(searchParams.get('max_price')!) : null;
  const page = parseInt(searchParams.get('page') || '1');
  const pageSize = parseInt(searchParams.get('page_size') || '12');

  let filtered = [...MOCK_LISTINGS];

  if (propertyType) {
    filtered = filtered.filter(
      (item) => item.property_type.toLowerCase() === propertyType.toLowerCase()
    );
  }

  if (location) {
    filtered = filtered.filter(
      (item) =>
        item.city.toLowerCase().includes(location) ||
        item.country.toLowerCase().includes(location) ||
        item.title.toLowerCase().includes(location)
    );
  }

  if (minPrice !== null && !isNaN(minPrice)) {
    filtered = filtered.filter((item) => item.price_per_night >= minPrice);
  }

  if (maxPrice !== null && !isNaN(maxPrice)) {
    filtered = filtered.filter((item) => item.price_per_night <= maxPrice);
  }

  const total = filtered.length;
  const pages = Math.ceil(total / pageSize) || 1;
  const start = (page - 1) * pageSize;
  const items = filtered.slice(start, start + pageSize);

  return NextResponse.json({
    items,
    total,
    page,
    pages,
    page_size: pageSize,
  });
}

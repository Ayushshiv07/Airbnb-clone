import { NextResponse, NextRequest } from 'next/server';
import { getMockListingDetail } from '../../../../lib/mockData';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> | { id: string } }
) {
  const resolvedParams = await Promise.resolve(params);
  const id = parseInt(resolvedParams.id) || 1;
  const listing = getMockListingDetail(id);

  if (!listing) {
    return NextResponse.json({ detail: 'Listing not found' }, { status: 404 });
  }

  return NextResponse.json(listing);
}

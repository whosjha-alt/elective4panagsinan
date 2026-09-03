import React from 'react';
import { Eyebrow, Heading, Text } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';

export default function NotFound() {
  return (
    <div className="editorial-container py-32 flex flex-col items-center text-center space-y-6">
      <Eyebrow accent>404 · Uncharted Horizon</Eyebrow>
      <Heading level={1} variant="major">
        Destination Not Found
      </Heading>
      <Text size="lg" muted className="max-w-md">
        The page or destination you are seeking has either moved or does not exist in our Pangasinan provincial index.
      </Text>
      <div className="pt-4 flex items-center gap-4">
        <Button href="/" variant="primary" size="md" withArrow>
          Return Home
        </Button>
        <Button href="/destinations" variant="secondary" size="md">
          Browse All Destinations
        </Button>
      </div>
    </div>
  );
}

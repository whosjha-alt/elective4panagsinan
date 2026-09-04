import React from 'react';
import NextImage from 'next/image';

interface EditorialImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  aspectRatio?: 'portrait' | 'landscape' | 'panoramic' | 'wide' | 'square' | 'auto';
  radius?: 'none' | 'sm' | 'md' | 'lg';
  hoverZoom?: boolean;
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  containerClassName = '',
  aspectRatio = 'auto',
  radius = 'md',
  hoverZoom = false,
}) => {
  const isProd = process.env.NODE_ENV === 'production';
  const defaultBasePath = isProd ? '/elective4panagsinan' : '';
  const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : defaultBasePath;

  const basePath = rawBasePath.endsWith('/') ? rawBasePath.slice(0, -1) : rawBasePath;

  let finalSrc = src;
  if (!src.startsWith('http') && !src.startsWith('data:')) {
    const cleanSrc = src.startsWith('/') ? src : `/${src}`;
    finalSrc = (basePath && cleanSrc.startsWith(basePath + '/'))
      ? cleanSrc
      : `${basePath}${cleanSrc}`;
  }

  const aspectStyles = {
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[16/10]',
    panoramic: 'aspect-[21/9]',
    wide: 'aspect-[16/9]',
    square: 'aspect-square',
    auto: '',
  };

  const radiusStyles = {
    none: 'rounded-none',
    sm: 'rounded-editorial',
    md: 'rounded-image',
    lg: 'rounded-hero',
  };

  if (aspectRatio !== 'auto') {
    return (
      <div
        className={`relative overflow-hidden bg-cloud/50 ${aspectStyles[aspectRatio]} ${radiusStyles[radius]} ${containerClassName}`}
      >
        <NextImage
          src={finalSrc}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover ${hoverZoom ? 'editorial-img-hover' : ''} ${className}`}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden bg-cloud/50 ${radiusStyles[radius]} ${containerClassName}`}
    >
      <NextImage
        src={finalSrc}
        alt={alt}
        width={width || 800}
        height={height || 600}
        priority={priority}
        className={`w-full h-auto object-cover ${hoverZoom ? 'editorial-img-hover' : ''} ${className}`}
      />
    </div>
  );
};

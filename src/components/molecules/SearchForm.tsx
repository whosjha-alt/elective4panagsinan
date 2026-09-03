'use client';

import React from 'react';
import { Icon } from '../atoms/Icon';

interface SearchFormProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchForm: React.FC<SearchFormProps> = ({
  value,
  onChange,
  placeholder = 'Search by place, municipality, or category...',
  className = '',
}) => {
  return (
    <div className={`w-full ${className}`}>
      <label
        htmlFor="destination-search"
        className="block font-ui text-xs uppercase tracking-[0.16em] font-semibold text-palm mb-2"
      >
        Search Destinations
      </label>

      <div className="relative border-b-2 border-cloud hover:border-indigo-midnight/40 focus-within:!border-indigo-midnight transition-colors pb-1">
        <input
          id="destination-search"
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent text-ink placeholder:text-ink-subtle/70 text-base sm:text-lg font-ui py-2 pr-12 focus:outline-none"
          autoComplete="off"
          aria-label="Search destinations in Pangasinan"
        />

        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
          {value && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onChange('');
              }}
              className="pointer-events-auto p-1 text-ink-subtle hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-palm"
              aria-label="Clear search input"
            >
              <Icon name="close" size={16} />
            </button>
          )}
          <span className="text-indigo-midnight p-1">
            <Icon name="search" size={20} />
          </span>
        </div>
      </div>
    </div>
  );
};

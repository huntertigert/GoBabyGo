import React, { useState } from 'react';
import { Bundle, Product } from '../types';
import CarSeatIcon from './icons/CarSeatIcon';
import StrollerIcon from './icons/StrollerIcon';
import TrophyIcon from './icons/TrophyIcon';
import TravelSystemIcon from './icons/TravelSystemIcon';

interface ResultsProps {
  bundles: Bundle[];
  onReset: () => void;
}

const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const buildSearchUrl = (baseQuery: string, site?: string, customQuery?: string) => {
    const query = customQuery ? customQuery : `${baseQuery}${site ? ` site:${site}`: ''}`;
    return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
};

const ProductIcon: React.FC<{ type: string }> = ({ type }) => {
    const lowerType = type.toLowerCase();
    if (lowerType.includes('travel system')) {
        return <TravelSystemIcon />;
    }
    if (lowerType.includes('car seat')) {
        return <CarSeatIcon />;
    }
    if (lowerType.includes('stroller')) {
        return <StrollerIcon />;
    }
    // Fallback icon
    return <StrollerIcon />;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg">
      <div className="flex-shrink-0 w-8 h-8 text-indigo-500 mt-1">
        <ProductIcon type={product.type} />
      </div>
      <div>
        <p className="font-bold text-slate-800">{product.brand} {product.name}</p>
        <p className="text-sm text-indigo-700 font-medium">{product.priceRange}</p>
        <p className="text-sm text-slate-600 mt-1">{product.description}</p>
        
        {(product.pros?.length > 0 || product.cons?.length > 0) && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm">
            {product.pros?.length > 0 && (
              <div>
                <h4 className="font-semibold text-slate-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Pros
                </h4>
                <ul className="list-disc list-inside mt-1 text-slate-600 space-y-1 pl-2">
                  {product.pros.map((pro, i) => <li key={`pro-${i}`}>{pro}</li>)}
                </ul>
              </div>
            )}
            {product.cons?.length > 0 && (
              <div>
                <h4 className="font-semibold text-slate-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  Cons
                </h4>
                <ul className="list-disc list-inside mt-1 text-slate-600 space-y-1 pl-2">
                  {product.cons.map((con, i) => <li key={`con-${i}`}>{con}</li>)}
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
          <a href={buildSearchUrl(product.searchQuery, 'amazon.com')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full hover:bg-amber-200 transition-colors">
              Amazon
          </a>
          <a href={buildSearchUrl(product.searchQuery, 'target.com')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 text-sm font-semibold rounded-full hover:bg-red-200 transition-colors">
              Target
          </a>
          <a href={buildSearchUrl(product.searchQuery, 'walmart.com')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1 bg-sky-100 text-sky-800 text-sm font-semibold rounded-full hover:bg-sky-200 transition-colors">
              Walmart
          </a>
          <a href={buildSearchUrl(product.searchQuery, undefined, `official site ${product.searchQuery}`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors text-sm font-semibold hover:underline">
              Official Site
          </a>
          <div className="flex items-center space-x-2 text-slate-600">
             {product.rating && product.ratingCount && (
                <div className="flex items-center text-sm">
                    <StarIcon />
                    <span className="font-semibold ml-1">{product.rating.toFixed(1)}</span>
                    <span className="mx-1 text-slate-400">|</span>
                    <span>{product.ratingCount.toLocaleString()} ratings</span>
                </div>
            )}
             <a href={buildSearchUrl(product.searchQuery, undefined, `${product.searchQuery} review`)} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:underline">
              Read Reviews
          </a>
          </div>
        </div>
      </div>
    </div>
  )
};

const ShareResults: React.FC = () => {
    const [email, setEmail] = useState('');
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // This is a UI mockup. In a real app, you would send the data to a backend service.
        console.log('Sending results to:', email);
        setIsSent(true);
    };

    if (isSent) {
        return (
            <div className="text-center p-4 bg-green-100 text-green-800 rounded-lg border border-green-200">
                <p className="font-semibold">Success! Your bundles have been sent to {email}.</p>
            </div>
        )
    }

    return (
        <div className="bg-indigo-600 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-white mb-2">Save Your Results</h3>
            <p className="text-indigo-200 mb-4">Enter your email below to send these personalized bundles to your inbox.</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="flex-grow px-4 py-2 border-transparent bg-indigo-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 placeholder-indigo-300"
                />
                <button
                    type="submit"
                    className="px-5 py-2 bg-white text-indigo-600 font-semibold rounded-md shadow-sm hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white transition-colors"
                >
                    Send
                </button>
            </form>
            <p className="text-xs text-indigo-300 mt-3">*This is a UI demonstration. No email will actually be sent.</p>
        </div>
    );
}

const Results: React.FC<ResultsProps> = ({ bundles, onReset }) => {

  const handleShopBundle = (bundle: Bundle) => {
    bundle.products.forEach(product => {
      if (product.searchQuery && product.searchQuery.trim()) {
        const amazonSearchUrl = buildSearchUrl(product.searchQuery, 'amazon.com');
        window.open(amazonSearchUrl, '_blank', 'noopener,noreferrer');
      } else {
        console.warn("Skipping product in 'Shop Full Bundle' due to missing search query:", product);
      }
    });
  };

  return (
    <div className="w-full max-w-4xl">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-slate-800">Your Personalized Bundles</h2>
        <p className="mt-2 text-lg text-slate-600">
          Based on your answers, here are 3 great options for you and your little one.
        </p>
      </div>
      <div className="space-y-8">
        {bundles.map((bundle, index) => {
          const isBestMatch = bundle.isBestMatch === true;
          const bundleClasses = isBestMatch
            ? "p-6 rounded-xl shadow-lg bg-green-50 border border-green-200"
            : "p-6 rounded-xl shadow-lg bg-white border border-slate-200";

          return (
            <div key={index} className={bundleClasses}>
              <div className="mb-4">
                <div className="flex items-center flex-wrap gap-x-4">
                    <h3 className="text-2xl font-bold text-indigo-700">{bundle.bundleName}</h3>
                    {isBestMatch && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                            <TrophyIcon className="h-4 w-4 mr-1.5" />
                            Best Overall Match
                        </span>
                    )}
                </div>
                <p className="text-lg font-semibold text-slate-600">{bundle.totalPriceRange}</p>
                <p className="mt-2 text-slate-600">{bundle.description}</p>
              </div>
              <div className="space-y-4 border-t border-slate-200 pt-4">
                {bundle.products.map((product, pIndex) => (
                  <ProductCard key={pIndex} product={product} />
                ))}
              </div>
               <div className="mt-6 text-right">
                  <button
                    onClick={() => handleShopBundle(bundle)}
                    className="px-5 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition-colors"
                  >
                    Shop Full Bundle
                  </button>
              </div>
            </div>
          );
        })}
      </div>

       <div className="mt-12">
          <ShareResults />
      </div>

      <div className="text-center mt-12">
        <button
          onClick={onReset}
          className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition-colors"
        >
          Start Over
        </button>
      </div>
    </div>
  );
};

export default Results;

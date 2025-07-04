interface PageBannerProps {
  title: string;
  backgroundImage: string;
  breadcrumbs: Array<{ label: string; href?: string }>;
  bannerColor?: string; // 'blue' | 'orange' | hex
}

export default function PageBanner({ title, backgroundImage, breadcrumbs, bannerColor = 'blue' }: PageBannerProps) {
  // Determine Tailwind color classes
  const colorClass = bannerColor === 'orange' ? 'bg-orange-500' : 'bg-blue-600';
  const crumbActiveClass = bannerColor === 'orange' ? 'text-orange-500' : 'text-blue-400';
  const crumbInactiveClass = bannerColor === 'orange' ? 'text-orange-100' : 'text-blue-100';

  return (
    <div className="relative w-full">
      {/* Background Image Section */}
      <div className="relative h-64 md:h-64 bg-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      {/* Banner Section */}
      <div className={`w-full ${colorClass} py-2 md:py-6 px-4 md:px-0`}>
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h1>
          {/* Breadcrumbs */}
          <nav className={`flex items-center space-x-2 ${crumbInactiveClass} text-sm md:text-base`}>
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <div key={index} className="flex items-center">
                  {index > 0 && <span className="mx-2 text-white">&raquo;</span>}
                  {crumb.href && !isLast ? (
                    <a href={crumb.href} className={`hover:text-white transition-colors underline`}>
                      {crumb.label}
                    </a>
                  ) : isLast ? (
                    <span className={`font-bold ${bannerColor === 'orange' ? 'text-orange-100 bg-orange-900/30' : 'text-white bg-blue-900/30'} px-2 py-1 rounded`}>
                      {crumb.label}
                    </span>
                  ) : (
                    <span className="text-white font-semibold">{crumb.label}</span>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
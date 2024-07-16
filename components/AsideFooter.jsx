

export default function AsideFooter() {
  return (
    <div className="mt-6 text-sm text-gray-600">
      <p className="mb-4">
        <a href="https://dev.to/" className="text-blue-600 hover:underline">DEV Community</a> A constructive and inclusive social network for software developers. With you every step of your journey.
      </p>
      <p className="mb-4">
        Built on <a href="https://www.forem.com" className="text-blue-600 hover:underline">Forem</a> — the open source software that powers <a href="https://dev.to/" className="text-blue-600 hover:underline">DEV</a> and other inclusive communities.
      </p>
      <p>
        Made with love and <a href="https://rubyonrails.org/" className="text-blue-600 hover:underline">Ruby on Rails</a>. DEV Community © 2016 - 2024.
      </p>
    </div>
  );
};

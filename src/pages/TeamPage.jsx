import React from "react";
import PartnersSection from '../components/AboutPageComponents/PartnersSection';

function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      {/* <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Team & Partners
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experts and collaborators driving global innovation and policy impact.
          </p>
        </div>
      </div> */}

      {/* Partners Section Component */}
      <PartnersSection />
    </div>
  );
}

export default TeamPage;

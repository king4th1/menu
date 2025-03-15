// Explicitly access React from window
const React = window.React;
const { useState } = React;
const { createRoot } = window.ReactDOM;

function HibachiMenu() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center text-gray-800 border-b-4 border-red-500 pb-4">HIBACHI MENU</h1>
        
        <AppointmentSection />
        <PricingSection />
        <MenuSection />
        <UpgradeSection />
        <PolicySection />
      </div>
    </div>
  );
}

function AppointmentSection() {
  return (
    <div className="mb-12 bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-red-200 pb-2">APPOINTMENT HOURS</h2>
      <div className="flex justify-between items-center text-center">
        <div className="flex-1 transform hover:scale-105 transition-transform">
          <div className="text-lg font-semibold mb-2 text-gray-600">Early Afternoon</div>
          <div className="text-2xl text-red-600">1:00 PM</div>
        </div>
        <div className="flex-1 transform hover:scale-105 transition-transform">
          <div className="text-lg font-semibold mb-2 text-gray-600">Late Afternoon</div>
          <div className="text-2xl text-red-600">4:00 PM</div>
        </div>
        <div className="flex-1 transform hover:scale-105 transition-transform">
          <div className="text-lg font-semibold mb-2 text-gray-600">Evening</div>
          <div className="text-2xl text-red-600">7:00 PM</div>
        </div>
      </div>
    </div>
  );
}

function PricingSection() {
  return (
    <div className="mb-12 bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-red-200 pb-2">PRICING</h2>
      <div className="space-y-3">
        <p className="text-2xl font-medium text-red-600">$60.00 per adult</p>
        <p className="text-2xl font-medium text-red-600">$30.00 per child</p>
      </div>
      <div className="mt-6 text-gray-600 bg-gray-50 p-4 rounded-lg">
        <p className="mb-2">*not including tip</p>
        <p className="mb-2">*Party Minimum of $600.00 (example 10 adults)</p>
        <p className="italic">This includes everything but chef tip, optional upgrades and possible travel fee.</p>
      </div>
    </div>
  );
}

function MenuSection() {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-red-200 pb-2">WHAT'S INCLUDED</h2>
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <p className="text-lg mb-4 text-gray-700">fried rice, cooked vegetables, yum yum sauce, side salad AND</p>
        <p className="text-xl font-semibold text-red-600 mb-8">Your own choice of 2 proteins.</p>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Protein Choices (2 Per Person)</h3>
          <ul className="list-none space-y-3">
            {['NY Strip Steak', 'Chicken', 'Shrimp', 'Scallops', 'Tofu (Vegetarian & Vegan option)'].map(item => (
              <li key={item} className="flex items-center">
                <span className="text-red-500 mr-2">•</span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 italic text-gray-600">Each person gets to choose their own 2 proteins from the list above</p>
        </div>
      </div>
    </div>
  );
}

function UpgradeSection() {
  return (
    <div className="space-y-8 mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-red-200 pb-2">UPGRADED PROTEINS & ADD ONS</h2>
      
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Upgrade Choices:</h3>
        <ul className="list-none space-y-3">
          {[
            'Filet Mignon protein upgrade +$5',
            'Salmon protein upgrade +$5',
            'Lobster protein upgrade +$10'
          ].map(item => (
            <li key={item} className="flex items-center">
              <span className="text-red-500 mr-2">•</span>
              <span className="text-lg">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 italic text-gray-600">(you can choose to upgrade your protein choices with the options above)</p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">3rd Protein Add On Option:</h3>
        <ul className="list-none space-y-3">
          <li className="flex items-center">
            <span className="text-red-500 mr-2">•</span>
            <span className="text-lg">3rd Standard Protein +$10</span>
          </li>
          <li className="flex items-center ml-6">
            <span className="text-red-500 mr-2">◦</span>
            <span className="text-lg">Filet +$15</span>
          </li>
          <li className="flex items-center ml-6">
            <span className="text-red-500 mr-2">◦</span>
            <span className="text-lg">Lobster +$20</span>
          </li>
        </ul>
        <p className="mt-4 italic text-gray-600">(you can choose to add a 3rd protein from the options above)</p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Add On Option:</h3>
        <ul className="list-none">
          <li className="flex items-center">
            <span className="text-red-500 mr-2">•</span>
            <span className="text-lg">Garlic Noodles – Add noodles +$5</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function PolicySection() {
  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-red-200 pb-2">RESERVATION & DEPOSIT</h2>
        <div className="space-y-6">
          <p className="text-xl text-red-600">A $200 deposit is required to secure your reservation.</p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="font-semibold text-lg mb-2">Payment Instructions:</p>
            <p className="text-gray-700">Please submit deposit via Zelle to: 6125329983 xin jin</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="font-semibold text-lg mb-2">Order Submission:</p>
            <p className="text-gray-700">Once the deposit is placed, please have all guests submit their orders via email to:</p>
            <p className="text-blue-600 mt-2 text-lg">xj0059@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-red-200 pb-2">CANCELLATION & WEATHER POLICY</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-3">Cancellation Policy:</h3>
            <p className="text-gray-700">At least 48 hours notice required for all cancellations and rescheduled parties or guest will be charged a fee of $200.00.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Weather Policy:</h3>
            <ul className="space-y-3">
              {[
                'If it rains, customer is required to provide some type of covering for the chef to cook under so they can stay dry.',
                'We can cook under tents, and patios.',
                'Customer is responsible for canceling due to inclement weather within 48 hours of your party.'
              ].map(item => (
                <li key={item} className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Update render to use createRoot properly
const root = createRoot(document.getElementById('root'));
root.render(<HibachiMenu />);
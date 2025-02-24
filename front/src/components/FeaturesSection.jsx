const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: "📦",
      title: "Free Shipping",
      description: "Our free shipping policy applies to all orders, regardless of order value or destination."
    },
    {
      id: 2,
      icon: "💳",
      title: "Secure Payments",
      description: "Your payments are always safe, secure, and protected at all times."
    },
    {
      id: 3,
      icon: "🎧",
      title: "Support Online 24/7",
      description: "We are available 24/7 to assist you with any questions or issues you may have."
    }
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map(feature => (
          <div key={feature.id} className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;

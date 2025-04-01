import React from "react";

const Footer = () => {
  return (
    <footer className="relative bottom-0 w-full bg-blue-900 text-white text-center py-6 mt-8">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} ShoppyGlobe. All rights reserved.</p>
        <p>Developed by <strong>Nitish Kumar</strong></p>
        <p>Your one-stop destination for the best shopping experience.</p>
      </div>
    </footer>
  );
};

export default Footer;

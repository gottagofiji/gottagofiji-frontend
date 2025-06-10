import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <h2 className="text-xl font-semibold mb-2">1. Site Use</h2>
      <p className="mb-4">
        By accessing and using the GOTTAGOFIJI platform, you agree to abide by our rules,
        policies, and terms. Any misuse or abuse of the platform will result in
        account suspension or termination.
      </p>

      <h2 className="text-xl font-semibold mb-2">2. Bookings</h2>
      <p className="mb-4">
        GOTTAGOFIJI facilitates rental car and transfer bookings only. A deposit is
        collected as part of the platform's commission. The remaining amount is to be
        paid directly to the supplier. GOTTAGOFIJI holds no responsibility for supplier
        behavior or performance.
      </p>

      <h2 className="text-xl font-semibold mb-2">3. Liability</h2>
      <p className="mb-4">
        GOTTAGOFIJI is not liable for any injury, damage, death, or delay arising
        from the use of vehicles or services booked through the platform. All risks
        and disputes must be resolved between the user and the supplier.
      </p>

      <h2 className="text-xl font-semibold mb-2">4. Commission Structure</h2>
      <p className="mb-4">
        GOTTAGOFIJI charges a non-refundable deposit as part of the booking, which acts as
        the platform’s commission. This amount is not visible to suppliers and is deducted
        upfront.
      </p>

      <h2 className="text-xl font-semibold mb-2">5. Account Management</h2>
      <p className="mb-4">
        GOTTAGOFIJI reserves the right to approve, decline, pause, or terminate supplier
        or user accounts at its sole discretion.
      </p>

      <h2 className="text-xl font-semibold mb-2">6. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to modify these terms at any time. Continued use of the
        platform constitutes acceptance of the revised terms.
      </p>

      <p className="mt-8 text-gray-600 text-sm">
        Last updated: June 2025
      </p>
    </div>
  );
};

export default TermsAndConditions;
import React, { useEffect, useState } from "react";
import axios from "axios";

const RevenueReport = () => {
  const [report, setReport] = useState({
    totalRevenue: 0,
    bookingsCount: 0,
    breakdown: [],
  });

  useEffect(() => {
    const fetchReport = async () => {
      const res = await axios.get("/api/admin/revenue-report");
      setReport(res.data);
    };
    fetchReport();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Revenue Report</h1>

      <div className="bg-white shadow p-6 rounded mb-6">
        <h2 className="text-xl font-semibold mb-2">Summary</h2>
        <p><strong>Total Revenue:</strong> ${report.totalRevenue.toFixed(2)}</p>
        <p><strong>Total Bookings:</strong> {report.bookingsCount}</p>
      </div>

      <div className="bg-white shadow p-6 rounded">
        <h2 className="text-xl font-semibold mb-4">Breakdown by Supplier</h2>
        <ul className="divide-y divide-gray-200">
          {report.breakdown.map((entry, index) => (
            <li key={index} className="py-2">
              <strong>{entry.supplierName}</strong>: ${entry.revenue.toFixed(2)} from {entry.bookings} bookings
            </li>
          ))}
          {!report.breakdown.length && (
            <li className="text-gray-500">No data available</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RevenueReport;
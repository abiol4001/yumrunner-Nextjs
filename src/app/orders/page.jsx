import React from 'react'

const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-1">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base even:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1234567890</td>
            <td className="py-6 px-1">12/34/7890</td>
            <td className="py-6 px-1">$89</td>
            <td className="hidden md:block py-6 px-1">Big burger</td>
            <td className="py-6 px-1">On the way ...</td>
          </tr>
          <tr className="text-sm md:text-base even:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1234567890</td>
            <td className="py-6 px-1">12/34/7890</td>
            <td className="py-6 px-1">$89</td>
            <td className="hidden md:block py-6 px-1">Big burger</td>
            <td className="py-6 px-1">On the way ...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrdersPage
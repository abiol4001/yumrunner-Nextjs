"use client"
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { BiSolidPencil } from "react-icons/bi"
import React from "react"

const OrdersPage = () => {

  const router = useRouter()

  const {data:session, status} = useSession()
  if(status === "unauthenticated"){
    router.push("/")
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch("http://localhost:3000/api/orders").then((res) =>
        res.json()
      ),
  });

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn:({id, status}) => {
      return fetch(`http://localhost:3000/api/orders/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(status)
      });
    },
    onSuccess() {
      queryClient.invalidateQueries({queryKey: ["orders"]})
    }
  })

  

  if (isLoading || status === "loading") return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const updateOrderStatus = (e, id) => {
    e.preventDefault()
    const form = e.target
    const input = form.elements[0]
    const status = input.value

    mutation.mutate({id, status})
  };

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
          {data.map((item) => (
            <tr key={item.id} className="text-sm md:text-base even:bg-gray-100">
              <td className="hidden md:block py-6 px-1">{item.id}</td>
              <td className="py-6 px-1">
                {item.createdAt.toString().slice(0, 10)}
              </td>
              <td className="py-6 px-1">${item.price}</td>
              <td className="hidden md:block py-6 px-1">Big burger</td>
              {session.user.isAdmin ? (
                <td>
                  <form className='flex items-center justify-center gap-3' onSubmit={(e)=>updateOrderStatus(e, item.id)}>
                    <input type="text" className='outline-none px-2 py-1 ring-1 ring-red-400 rounded-md ' placeholder={item.status} />
                    <button className='rounded-full bg-red-500 p-2'><BiSolidPencil color='white' /></button>
                  </form>
                </td>
              ) : (
                <td className="py-6 px-1">{item.status}</td>
              )}
            </tr>
          ))}
          {/* <tr className="text-sm md:text-base even:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1234567890</td>
            <td className="py-6 px-1">12/34/7890</td>
            <td className="py-6 px-1">$89</td>
            <td className="hidden md:block py-6 px-1">Big burger</td>
            <td className="py-6 px-1">On the way ...</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersPage
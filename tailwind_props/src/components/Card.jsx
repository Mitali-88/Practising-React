import React from 'react'

function Card({username,btnText="click"}) {
    return (
        <figure className="max-w-sm bg-white rounded-xl overflow-hidden shadow-md border">
  <img
    className="w-full h-48 object-cover"
    src="https://images.pexels.com/photos/31890680/pexels-photo-31890680/free-photo-of-woman-in-white-dress-surrounded-by-monstera-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    alt="Random"
  />
  <figcaption className="p-4">
    <h2 className="text-lg font-semibold text-gray-800">{username}</h2>
    <p className="text-gray-600 mt-1">
      A simple card structure using the <code>&lt;figure&gt;</code> element and Tailwind CSS.
    </p>
    <button className="mt-3 bg-pink-500 text-black px-4 py-2 rounded hover:bg-indigo-700">
      {btnText}
    </button>
  </figcaption>
</figure>
        
    )
}

export default Card

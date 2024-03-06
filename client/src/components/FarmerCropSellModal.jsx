import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";


const FarmerCropSellModal = ({isModalOpen,toggleModal,onTransactionAdded,accountDetails,transactionType,}) => {

    const handleCloseModal = () => {
        toggleModal();
        
      };
    
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      contentLabel="Payment Modal"
      appElement={document.getElementById("root")}
      style={{
        content: {
          background: "white",
          borderRadius: "8px",
          maxWidth: "520px",
          maxHeight : "520px",
          margin: "0 auto",
          padding: "20px",
        },
        overlay: {
          background: "rgba(0, 0, 0, 0.75)",
        },
      }}
    >
      <div className="relative">
        <button
          type="button"
          className="absolute top-3 right-2.5 text-gray-400"
          onClick={handleCloseModal}
        >
          <AiOutlineClose className="text-2xl" />
          <span className="sr-only">Close modal</span>
        </button>
        <h3 className="text-lg font-semibold text-gray-900">
          Sell in market
        </h3>
        {/* <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div>
            <label
              htmlFor="amount"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Amount
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={formData.amount}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="2999"
              required
            />
          </div>
          <div>
            <label
              htmlFor="type"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Category
            </label>
            <span
              
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              
          {modalHeader}
        
            </span>
          </div>
          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write a note here"
              required
            />
          </div>
          <button
            type="submit"
            className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            
          Submit
        
          </button>
        </form> */}
      </div>
    </Modal>
  )
}

export default FarmerCropSellModal
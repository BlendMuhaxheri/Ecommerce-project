"use client";

import { useState } from "react";
import Hr from "@/components/ui/Hr";
import type { ApiProduct } from "../types";

type Props = {
  product: ApiProduct;
};

type Tab = "description" | "info" | "reviews";

export default function ProductTabs({ product }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("description");

  return (
    <div className="mt-10 max-w-2xl">
      {/* Tabs header */}
      <div className="flex gap-10 border-b border-gray-200 text-sm">
        <button
          onClick={() => setActiveTab("description")}
          className={`pb-3 ${
            activeTab === "description"
              ? "border-b-2 border-black font-medium"
              : "text-gray-500"
          }`}
        >
          Description
        </button>

        <button
          onClick={() => setActiveTab("info")}
          className={`pb-3 ${
            activeTab === "info"
              ? "border-b-2 border-black font-medium"
              : "text-gray-500"
          }`}
        >
          Additional Information
        </button>

        <button
          onClick={() => setActiveTab("reviews")}
          className={`pb-3 ${
            activeTab === "reviews"
              ? "border-b-2 border-black font-medium"
              : "text-gray-500"
          }`}
        >
          Reviews
        </button>
      </div>

      {/* Content */}
      <div className="pt-6">
        {activeTab === "description" && (
          <p className="leading-7 text-gray-600">
            {product.attributes.description}
          </p>
        )}

        {activeTab === "info" && (
          <div className="space-y-2 text-sm text-gray-600">
            <p>SKU: {product.id}</p>
            <p>Category: {product.attributes.category || "N/A"}</p>
            <p>Brand: {product.attributes.brand || "N/A"}</p>
          </div>
        )}

        {activeTab === "reviews" && (
          <p className="text-sm text-gray-500">
            No reviews yet. Be the first to review this product.
          </p>
        )}
      </div>
    </div>
  );
}

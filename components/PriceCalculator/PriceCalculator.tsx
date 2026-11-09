"use client";

import { useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

export default function PriceCalculator() {
  const [originalWeight, setOriginalWeight] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");

  const { sellingPrice, priceWithIncentive } = getBDPrice(
    originalWeight,
    originalPrice,
  );

  const calculatedPrice = Math.ceil(sellingPrice);
  const buyingPrice = Math.ceil(priceWithIncentive);
  const profit = calculatedPrice - buyingPrice;

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28 lg:px-12">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-300/20 blur-[100px] sm:h-96 sm:w-96 sm:blur-[120px]" />

      <div className="relative mx-auto w-full max-w-5xl">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-10 md:mb-12">
          <p className="text-[9px] tracking-[0.3em] text-pink-500 sm:text-[10px]">
            PRODUCT CALCULATOR
          </p>

          <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Calculate your <i className="text-pink-400">price.</i>
          </h2>

          <p className="mx-auto mt-4 max-w-md px-2 text-xs leading-5 text-[#756a70] sm:text-sm sm:leading-6">
            Enter the original product details to calculate the final selling
            price in Bangladeshi Taka.
          </p>
        </div>

        {/* Calculator */}
        <div className="grid overflow-hidden rounded-3xl border border-white/70 bg-white/60 shadow-[0_20px_80px_rgba(236,72,153,0.10)] backdrop-blur-xl sm:rounded-[32px] grid-cols-2">
          {/* Inputs */}
          <div className="p-5 sm:p-7 md:p-10">
            <div className="space-y-5">
              {/* Weight */}
              <div>
                <label
                  htmlFor="original-weight"
                  className="mb-2 block text-[9px] tracking-[0.2em] text-[#756a70] sm:text-[10px]"
                >
                  ORIGINAL PRODUCT WEIGHT
                </label>

                <div className="flex h-12 items-center rounded-xl border border-[#eadde2] bg-white/70 px-3 transition focus-within:border-pink-300 focus-within:ring-2 focus-within:ring-pink-100 sm:h-14 sm:rounded-2xl sm:px-4">
                  <input
                    id="original-weight"
                    type="number"
                    min="0"
                    step="0.01"
                    value={originalWeight}
                    onChange={(e) => setOriginalWeight(e.target.value)}
                    placeholder="e.g. 100"
                    className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#b7aab0]"
                  />

                  <span className="ml-2 shrink-0 text-xs text-[#9b8c92]">
                    g
                  </span>
                </div>
              </div>

              {/* Price */}
              <div>
                <label
                  htmlFor="original-price"
                  className="mb-2 block text-[9px] tracking-[0.2em] text-[#756a70] sm:text-[10px]"
                >
                  ORIGINAL PRODUCT PRICE
                </label>

                <div className="flex h-12 items-center rounded-xl border border-[#eadde2] bg-white/70 px-3 transition focus-within:border-pink-300 focus-within:ring-2 focus-within:ring-pink-100 sm:h-14 sm:rounded-2xl sm:px-4">
                  <span className="shrink-0 text-sm text-[#9b8c92]">€</span>

                  <input
                    id="original-price"
                    type="number"
                    min="0"
                    step="0.01"
                    value={originalPrice}
                    onChange={(e) => setOriginalPrice(e.target.value)}
                    placeholder="e.g. 50"
                    className="min-w-0 flex-1 bg-transparent py-3 pl-2 text-sm outline-none placeholder:text-[#b7aab0]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="size-full overflow-hidden bg-linear-to-br from-[#fff1f5] via-[#ffe9f0] to-[#fbd8e5] p-3 sm:p-5 ">
            <div className=" flex items-center justify-between h-full w-full">
              {calculatedPrice > 0 ? (
                <div className="size-full flex items-center justify-center gap-3  flex-wrap">
                  {/* Selling Price */}
                  <PriceCard
                    cardText="Selling Price"
                    price={calculatedPrice}
                    textColor="text-green-400"
                  />

                  {/* Buying Price */}
                  <PriceCard
                    cardText="Buying Price"
                    price={buyingPrice}
                    textColor="text-red-400"
                  />
                  {/* Profit */}
                  <PriceCard
                    cardText="Profit"
                    price={profit}
                    textColor="text-blue-400"
                  />
                </div>
              ) : (
                <div className="flex min-h-65 items-center justify-center rounded-2xl border border-white/70 bg-white/40 p-6 text-center">
                  <p className="max-w-[240px] text-xs leading-6 text-[#806f76]">
                    Enter the product weight and original price to see your
                    selling price, buying price and estimated profit.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const getBDPrice = (weight: string, euroPrice: string) => {
  const productWeight = Number(weight);
  const productPrice = Number(euroPrice);

  if (
    !Number.isFinite(productWeight) ||
    !Number.isFinite(productPrice) ||
    productWeight <= 0 ||
    productPrice <= 0
  ) {
    return {
      sellingPrice: 0,
      priceWithIncentive: 0,
    };
  }

  // Import cost
  const importCost = productWeight * 0.013;

  // Product cost + import cost in EUR
  const totalProductCost = productPrice + importCost;

  // EUR → BDT
  const convertedBDTPrice = totalProductCost * 143;

  // Add 2.5% incentive
  const priceWithIncentive = convertedBDTPrice * 1.025;

  // Add 26% selling margin
  const sellingPrice = priceWithIncentive * 1.26;

  return { sellingPrice, priceWithIncentive };
};

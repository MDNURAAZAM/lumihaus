"use client";

import { useState } from "react";

export default function PriceCalculator() {
  const [originalWeight, setOriginalWeight] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");

  const calculatedPrice = Math.ceil(getBDPrice(originalWeight, originalPrice));

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28 lg:px-12">
      {/* Pink glow */}
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
        <div className="grid overflow-hidden rounded-[24px] border border-white/70 bg-white/60 shadow-[0_20px_80px_rgba(236,72,153,0.10)] backdrop-blur-xl sm:rounded-[32px] md:grid-cols-2">
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

          {/* Result */}
          <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-linear-to-br from-[#fff1f5] via-[#ffe9f0] to-[#fbd8e5] p-6 sm:min-h-[300px] sm:p-8 md:min-h-full">
            {/* Inner glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 blur-[70px]" />

            <div className="relative z-10 text-center">
              <p className="text-[9px] tracking-[0.3em] text-pink-500 sm:text-[10px]">
                CALCULATED PRICE
              </p>

              <p className="mt-4 font-sans text-4xl font-light tracking-tight text-[#392d32] sm:text-5xl md:text-6xl">
                BDT{" "}
                {calculatedPrice.toLocaleString("en-BD", {
                  maximumFractionDigits: 0,
                })}
              </p>

              {calculatedPrice > 0 ? (
                <p className="mt-3 text-[10px] text-[#806f76] sm:text-xs">
                  Estimated final selling price
                </p>
              ) : (
                <p className="mx-auto mt-4 max-w-[240px] text-[10px] leading-5 text-[#806f76] sm:text-xs">
                  Enter the product weight and original price to see the
                  calculation.
                </p>
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
    return 0;
  }

  // Import cost
  const importCost = productWeight * 0.012;

  // Product cost + import cost in EUR
  const totalProductCost = productPrice + importCost;

  // EUR → BDT
  const convertedBDTPrice = totalProductCost * 143;

  // Add 2.5% incentive
  const priceWithIncentive = convertedBDTPrice * 1.025;

  // Add 20% selling margin
  const sellingPrice = priceWithIncentive * 1.2;

  return sellingPrice;
};

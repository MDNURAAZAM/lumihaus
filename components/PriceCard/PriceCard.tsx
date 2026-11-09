interface IPriceCardProps {
  price: number;
  cardText: string;
  textColor: string;
}

const PriceCard = ({ cardText, price, textColor }: IPriceCardProps) => {
  const formatPrice = (price: number) =>
    price.toLocaleString("en-BD", {
      maximumFractionDigits: 0,
    });
  return (
    <div
      className={`${textColor} rounded-2xl border border-white/80 bg-white/75 p-3 sm:p-5 shadow-2xl`}
    >
      <p className="flex items-center justify-center text-[9px] tracking-[0.2em]  sm:text-[10px] ">
        {cardText?.toLocaleUpperCase()}
      </p>

      <p className="mt-2 text-3xl font-medium tracking-tight ">
        ৳ {formatPrice(price)}
      </p>
    </div>
  );
};

export default PriceCard;

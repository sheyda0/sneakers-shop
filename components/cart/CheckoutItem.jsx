const CheckoutItem = ({ title, value, cln, titleStyle, valueStyle }) => {
  return (
    <div
      className={`flex justify-between font-semibold text-[1.125rem] !h-max ${cln}`}
    >
      <p className={`text-[var(--dark-gray-color)] ${titleStyle}`}>{title}</p>
      <p className={valueStyle}>{value}</p>
    </div>
  );
};

export default CheckoutItem;

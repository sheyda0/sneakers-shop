const IconWhitBadge = ({ icon, number, badge }) => {
  return (
    <div className="relative">
      {badge && (
        <div className=" w-[1.1rem] text-[0.75rem] h-[1.1rem] absolute top-[-3px] right-[-3px] bg-yellow-300 rounded-full flex items-center justify-center">
          {number}
        </div>
      )}

      {icon}
    </div>
  );
};

export default IconWhitBadge;

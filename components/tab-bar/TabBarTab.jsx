import Link from "next/link";

const TabBarTab = ({ id, checked, icon, url }) => {
  return (
    <>
      <input id={`menu-${id}`} type="radio" name="menu" checked={checked} />
      <label htmlFor={`menu-${id}`}>
        <Link href={url}>
          <span></span>
          {icon}
        </Link>

        {/* <span>Message</span> */}
      </label>
    </>
  );
};

export default TabBarTab;

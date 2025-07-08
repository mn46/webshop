import MenuItem from "./MenuItem";

const CategoriesNavigation = () => {
  const menuItemsList = [
    { link: "/products", name: "all products" },
    { link: "/mens-clothing", name: "men's clothing" },
    { link: "/womens-clothing", name: "women's clothing" },
    { link: "/jewellery", name: "jewellery" },
    { link: "/electronics", name: "electronics" },
  ];

  return (
    <ul className="flex flex-col items-center text-white lg:text-gray-800 lg:flex-row gap-8 uppercase">
      {menuItemsList.map((item) => (
        <li>
          <MenuItem menuItem={item} />
        </li>
      ))}
    </ul>
  );
};

export default CategoriesNavigation;

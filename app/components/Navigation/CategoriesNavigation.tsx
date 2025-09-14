import MenuItem from "./MenuItem";

const CategoriesNavigation = () => {
  const menuItemsList = [
    { link: "/products", name: "all products", search: "all" },
    { link: "/products", name: "men's clothing", search: "mens-clothing" },
    {
      link: "/products",
      name: "women's clothing",
      search: "womens-clothing",
    },
    { link: "/products", name: "jewelery", search: "jewelery" },
    { link: "/products", name: "electronics", search: "electronics" },
  ];

  return (
    <ul className="flex flex-col items-center text-white lg:text-gray-800 lg:flex-row gap-8 uppercase">
      {menuItemsList.map((item) => (
        <li key={item.name}>
          <MenuItem menuItem={item} />
        </li>
      ))}
    </ul>
  );
};

export default CategoriesNavigation;

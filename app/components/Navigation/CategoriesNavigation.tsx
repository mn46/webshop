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
    <ul>
      {menuItemsList.map((item) => (
        <li>
          <MenuItem menuItem={item} />
        </li>
      ))}
    </ul>
  );
};

export default CategoriesNavigation;

import categories from "../categories";
import Categoryitem from "./Categoryitem";

const Directory = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <Categoryitem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;

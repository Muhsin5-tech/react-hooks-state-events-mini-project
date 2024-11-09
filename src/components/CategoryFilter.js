import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={(e) => {
            e.preventDefault();
            onSelectCategory(category);
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

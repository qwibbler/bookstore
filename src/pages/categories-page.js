import React from 'react';

const Categories = () => {
  const nav = document.querySelector('nav');
  if (nav) {
    nav.firstChild.classList.toggle('active', false);
    nav.lastChild.classList.toggle('active', true);
  }
  return (
    <section className="categories-section">
      <h1>Under Construction</h1>
    </section>
  );
};
export default Categories;

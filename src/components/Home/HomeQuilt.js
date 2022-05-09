import React, { useEffect } from "react";
import MainQuiltItem from "./HomeQuiltItem";

const MainQuilt = () => {

  useEffect(() => {
    const quiltItem = document.querySelectorAll('.quilt-item')

    quiltItem.forEach(item => {
      observer.observe(item)
    })

  })

  const quiltItemOptions = {
    root: null,
    threshold: .5,
    rootMargin: '0px',
  }

  const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear')
        observer.unobserve(entry.target)
      }
    })

  }, quiltItemOptions)


  return (
    <div className="quilt-wrapper w-full mt-8 gap-2 grid mb-4">
      <MainQuiltItem />
      <MainQuiltItem />
      <MainQuiltItem />
      <MainQuiltItem />
    </div>
  );
};

export default MainQuilt;

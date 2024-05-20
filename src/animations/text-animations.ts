import gsap from "gsap";

export const textSplit = () => {
  const allParagragh = document.querySelectorAll(".animated-text");
  allParagragh.forEach((paragraph) => {
    const word = paragraph.textContent.split(" ");
    paragraph.textContent = "";

    word.forEach((word) => {
      paragraph.innerHTML += `<span class="word-overflow-container overflow-hidden inline-block"><div class="paragraph-word">${word}</div></span> `;
    });
  });
};

export const textVerticalAnimationIn = () => {
  const allParagragh = document.querySelectorAll(
    ".animated-text.vertical-anim",
  );

  allParagragh.forEach((paragraph) => {
    const text = paragraph.querySelectorAll(".paragraph-word");

    text.forEach((text) => {
      const y = "500%";
      text.style.transform = "translateY:" + y;

      gsap.fromTo(
        text,
        { y: y },
        {
          y: 0,
          duration: 1.5,
          ease: "expo.out",
          overwrite: "auto",
          scrollTrigger: {
            trigger: paragraph,
            start: "top 90%",
          },
        },
      );
    });
  });
};

export const characterSplit = () => {
  const allParagragh = document.querySelectorAll(".animated-character");
  allParagragh.forEach((paragraph) => {
    const word = paragraph.textContent.split(" ");
    paragraph.textContent = "";

    word.forEach((word) => {
      const letters = word?.split("");

      letters.forEach((letter) => {
        paragraph.innerHTML += `<span class="word-overflow-container overflow-hidden inline-flex"><div class="paragraph-character">${letter}</div></span> `;
      });
    });
  });
};

export const characterVerticalAnimationIn = () => {
  const allParagragh = document.querySelectorAll(
    ".animated-character.vertical-anim",
  );

  allParagragh.forEach((paragraph) => {
    const text = paragraph.querySelectorAll(".paragraph-character");

    const y = "100%";

    gsap.fromTo(
      text,
      { y: y, opacity: 0 },
      {
        y: 0,
        duration: 1.5,
        ease: "expo.out",
        stagger: 0.05, // Adjust stagger duration as needed
        opacity: 1,
        scrollTrigger: {
          trigger: paragraph,
          start: "top 100%",
        },
      },
    );
  });
};

export const scaleFromZero = () => {
  const allImages = document.querySelectorAll(".animate-scale-image");

  allImages.forEach((image) => {
    gsap.fromTo(
      image,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        duration: 1.5,
        ease: "expo.out",
        opacity: 1,
        scrollTrigger: {
          trigger: image,
          start: "top 90%",
        },
      },
    );
  });
};

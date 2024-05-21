  const SplitText = (text: string) => {
    return text.split("").map((char, index) => {
      if (char === " ") {
        return (
          <span key={index} className="inline-block animate-letter">
            &nbsp;
          </span>
        );
      } else {
        return (
          <span key={index} className="inline-block animate-letter">
            {char}
          </span>
        );
      }
    });
  };

  export default SplitText

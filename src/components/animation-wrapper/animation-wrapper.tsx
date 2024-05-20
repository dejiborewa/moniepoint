import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

interface ScaleImageProps
  extends Omit<
    React.DetailedHTMLProps<
      React.ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    >,
    "className"
  > {
  className?: string;
}

function AnimateParagraphVeritical({ children }: Props) {
  return <span className="animated-text vertical-anim">{children}</span>;
}

function AnimateStaggeredCharcterVeritical({ children, className }: Props) {
  return (
    <span
      className={`${
        className ?? ""
      } animated-character vertical-anim inline-flex`}
    >
      {children}
    </span>
  );
}

function AnimateScaleImage({ className, ...rest }: ScaleImageProps) {
  return <img className={`${className ?? ""} animate-scale-image`} {...rest} />;
}

export { AnimateStaggeredCharcterVeritical, AnimateScaleImage };
export default AnimateParagraphVeritical;

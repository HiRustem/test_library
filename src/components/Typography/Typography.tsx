import React from "react";
import cn from "classnames";
import "./Typography.scss";

type TypographyType =
  | "Title_1"
  | "Title_1_DemiBold"
  | "Title_2"
  | "Title_2_DemiBold"
  | "Title_3"
  | "Title_3_DemiBold"
  | "Title_3_DemiBold_dynamic"
  | "Subtitle"
  | "Button"
  | "Caption"
  | "Land_68"
  | "Land_48"
  | "Land_60"
  | "Land_40"
  | "Land_32";

type TextHTMLTag =
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "span"
  | "strong"
  | "em"
  | "u"
  | "i"
  | "b"
  | "a"
  | "abbr"
  | "code"
  | "pre"
  | "blockquote";

export interface TypographyProps {
  type: TypographyType;
  children: React.ReactNode;
  className?: string;
  as?: TextHTMLTag; // Use JSX.IntrinsicElements
}

const Typography: React.FC<TypographyProps> = ({
  type,
  children,
  className,
  as: Tag = "p",
}) => {
  return <Tag className={cn([type], className)}>{children}</Tag>;
};

export default Typography;

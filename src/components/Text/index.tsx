import styled from "@emotion/styled";

export enum TextFontWeight {
  "w300" = 300,
  "w500" = 500,
  "w700" = 700,
}

export enum TextFontSize {
  "xs" = "12px",
  "sm" = "14px",
  "md" = "16px",
  "lg" = "18px",
  "xl" = "20px",
}

export enum TextFontColor {
  "grey" = "#777777",
  "lightGrey" = "#DADADA",
  "darkGrey" = "#333333",
  "white" = "#FAFAFA",
  "orange" = "#F57C00",
}

export interface TextProps extends TextBaseProps {
  label: string;
}

interface TextBaseProps {
  fontSize?: TextFontSize;
  fontColor?: TextFontColor;
  fontWeight?: TextFontWeight;
  block?: boolean;
}

export function Text({
  label,
  fontSize = TextFontSize.md,
  fontColor = TextFontColor.white,
  fontWeight = TextFontWeight.w500,
  block = false,
}: TextProps) {
  return (
    <StyledText
      data-testid="text"
      fontColor={fontColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      block={block}
    >
      {label}
    </StyledText>
  );
}

// TODO: Replace colors by theme.
const StyledText = styled.h1`
  font-family: Helvetica;
  padding: 0 6px;
  text-align: left;
  display: flex;
  align-items: center;
  font-size: ${({ fontSize }: TextBaseProps) => fontSize};
  color: ${({ fontColor }: TextBaseProps) => fontColor};
  font-weight: ${({ fontWeight }: TextBaseProps) => fontWeight};
  width: ${({ block }: TextBaseProps) => (block ? "100%" : "inherit")};
`;

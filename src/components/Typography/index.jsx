import H1 from "./type/H1";
import H2 from "./type/H2";
import H3 from "./type/H3";
import H4 from "./type/H4";
import H5 from "./type/H5";
import Base from "./type/Base";
import Caption from "./type/Caption";

const FontFamily = {
  primary: "text-font--primary",
  secondary: "text-font--secondary",
};

const Boldness = {
  normal: "text-boldness--normal",
  semibold: "text-boldness--semibold",
  bold: "text-boldness--bold",
};

export { FontFamily, Boldness, H1, H2, H3, H4, H5, Base, Caption };

// Typograhpy size ga ko'ra turlari
// (agar qanaqaligini bilmasez https://www.figma.com/design/FkZGoDkMi044JkA1ZmzHht/Gallery-(Community)?node-id=1173-11052&t=672sgylL9iY8zsq2-0
// linkdagi Text Styles joyini ko'ring, shuni piksellarini bir xil qilishga harakat qilganman)

// H1 - 67px
// H2 - 51px
// ...
// Base - 16px
// Caption - 12px

// Typography property lari:
// fontFamily - 2 turdagi qiymatlari bor:
//    FontFamily.primary - (Work Sans)
//    FontFamily.secondary - (Open Sans)

// boldness - 3 turdagi qiymatlari bor:
//    Boldness.normal - 400
//    Boldness.semibold - 500
//    Boldness.bold - 700

// Ishlatishga namuna
// import { H1, H2, H3, H4, H5, Base, Caption, FontFamily, Boldness } from "<Button linki>";
// <H1 fontFamily={FontFamily.primary} boldness={Boldness.bold}>Lorem ipsum</H1>

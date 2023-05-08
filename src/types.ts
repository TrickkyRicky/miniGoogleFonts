type TItem = {
  category: string;
  family: string;
  files: Record<string, string | undefined>;
  kind: string;
  lastModified: string;
  menu: string;
  subsets: string[];
  variants: string[];
  version: string;
};

interface IFontData {
  kind: string;
  items: TItem[];
}

export type { IFontData, TItem };

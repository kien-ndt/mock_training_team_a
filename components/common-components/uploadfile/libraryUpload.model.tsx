export type Props = {
  files?: File[];
  onChange?: (params: any) => void;
  onDelete?: (params: any) => void;
};

export type File = {
  id?: number;
};

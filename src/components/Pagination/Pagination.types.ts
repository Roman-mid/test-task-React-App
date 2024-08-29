export interface PaginationProps {
  className?: string;
  length: any[];
  onClick: () => void;
}

export interface PaginationBtnProps {
  className?: string;
  page: number;
  onClick: () => void;
}

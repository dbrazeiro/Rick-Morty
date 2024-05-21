import { Pagination, Paper } from "@mui/material";
import { styles } from "./bottomNavigation.styles";
interface BottomNavigationProps {
  count: number;
  page: number;
  handleChangePage: (_: React.ChangeEvent<unknown>, newPage: number) => void;
}

export const BottomPagination = ({
  count,
  page,
  handleChangePage,
}: BottomNavigationProps) => {
  return (
    <Paper elevation={3} sx={styles.bottomPagination}>
      <Pagination
        count={count}
        color="primary"
        onChange={handleChangePage}
        page={page}
      />
    </Paper>
  );
};

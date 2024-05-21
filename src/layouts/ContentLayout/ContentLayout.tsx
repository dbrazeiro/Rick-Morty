import { Alert, Box, CircularProgress, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { styles } from "./contentLayout.styles";

interface ContentLayoutProps {
  isLoading?: boolean;
  error?: Error;
  children: React.ReactElement;
}

export const ContentLayout = ({
  children,
  isLoading,
  error,
}: ContentLayoutProps) => {
  const defaultErrorMassage = "An error occurred while fetching the data.";

  if (isLoading) {
    return (
      <Box sx={styles.bottomLoader}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Alert severity="error" sx={{ p: 4 }}>
        <Box>{error.message || defaultErrorMassage}</Box>
        <Link to="/characters/1">Take me back to Home</Link>
      </Alert>
    );
  }
  return (
    <Stack p={4} mb={12}>
      {children}
    </Stack>
  );
};

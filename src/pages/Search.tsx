import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Search = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const searchQuery = query.get("searchQuery");
  const [searchWord, setSearchWord] = useState(searchQuery);
  console.log(searchWord);

  return (
    <Box>
      <Box>Search</Box>
    </Box>
  );
};

export default Search;

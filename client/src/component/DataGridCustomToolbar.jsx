import React, { useCallback, useEffect,useRef } from "react";
import { Search } from "@mui/icons-material";
import { IconButton, TextField, InputAdornment } from "@mui/material";
import {
  GridToolbarDensitySelector,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
} from "@mui/x-data-grid";
import FlexBetween from "./FlexBetween";

const DataGridCustomToolbar = ({ searchInput, setSearchInput, setSearch }) => {
      const inputRef = useRef(null);

      const handleSearchChange = useCallback((e) =>{
            setSearchInput(e.target.value);
      },[setSearchInput]);

      const handleSearchClick = useCallback(() =>{
            setSearch(searchInput);
            setSearchInput("");
      },[searchInput,setSearch,setSearchInput]);

      useEffect(() =>{
            if(inputRef.current){
                  inputRef.current.focus();
            }
      },[searchInput]);
  return (
    <GridToolbarContainer>
      <FlexBetween width="100%">
        <FlexBetween>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
        </FlexBetween>
        <TextField
          label="Search..."
          sx={{ mb: "0.5rem", width: "15rem" }}
          onChange={handleSearchChange}
          value={searchInput}
          inputRef={inputRef}
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleSearchClick}
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FlexBetween>
    </GridToolbarContainer>
  );
};

export default DataGridCustomToolbar;
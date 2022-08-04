import { InputAdornment, TextField } from "@mui/material";

const IconTextField = ({
  iconStart,
  iconEnd,
  InputProps,
  value,
  onChange,
  ...props
}) => {
  return (
    <TextField
      {...props}
      sx={{ "& legend": { display: "none" }, "& fieldset": { top: 0 } }}
      value={value}
      onChange={onChange}
      autoComplete="off"
      InputProps={{
        ...InputProps,
        style: {
          height: "50px",
          backgroundColor: "#F7F3F7",
        },

        startAdornment: iconStart ? (
          <InputAdornment
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
            position="start"
          >
            {iconStart}
          </InputAdornment>
        ) : null,
        endAdornment: iconEnd ? (
          <InputAdornment
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
            position="end"
          >
            {iconEnd}
          </InputAdornment>
        ) : null,
      }}
    />
  );
};

export default IconTextField;

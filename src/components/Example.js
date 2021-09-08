//компонент для экспериметов. Инфо из методички и пр.

import { TextField, Fab, ThemeProvider, createTheme} from "@material-ui/core";
import { useState, useCallback} from "react";


const theme = createTheme({
    palette: {
      primary: {
        main: "#FF9800",
      },
      secondary: {
        main: "#0098FF",
      },
    },
   });
   

export default function Example() {
 const [value, setValue] = useState("");
  const handleChange = useCallback((e) => {
   setValue(e.target.value);
 }, []);

 return (
     <div>
         <p>Примерно так все и выглядит</p>
         

<ThemeProvider theme={theme}>
   <TextField
     style={{ margin: '20px' }}
     id="outlined-basic"
     label="Outlined"
     variant="outlined"
     value={value}
     onChange={handleChange}
   />
   <Fab color="secondary" aria-label="edit">
    Edit!
    </Fab>
    </ThemeProvider>

</div>
 );
}


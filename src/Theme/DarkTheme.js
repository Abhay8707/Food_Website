const { createTheme } = require("@mui/material");

export const darkTheme=createTheme({
    palette:{
        mode:"dark",
        primary:{
            main:"#6f03fc"
        },
        secondary:{
            main:"#8f74ab"
        },
        black:{
            main:"#242B2E"
        },
        background:{
            main:"#000000",
            default:"#0D0D0D",
            paper:"#0D0D0D"
        },
        textColor:{
            main:"#111111"
        }
    }
})
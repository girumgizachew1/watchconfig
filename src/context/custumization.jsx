import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({});

export const bandcolors = [
     {
        name: "WHITE",
        color:  "#ffffff",
    },
    {
        name: "VANILLA",
        color:  "#CCB7A5",
    },
   
    {
        name: "CONIFER",
        color:  "#C7DF57",
    },
    {
        name: "FLAME PEA",
        color:  "#E2573D",
    },
    {
        name: "HEAVY METAL",
        color:  "#1A1F19",
    },
    {
        name: "WHITE",
        color:  "#ffffff",
    },
    {
        name: "VANILLA",
        color:  "#CCB7A5",
    },
   
    {
        name: "CONIFER",
        color:  "#C7DF57",
    },
    {
        name: "FLAME PEA",
        color:  "#E2573D",
    },
    {
        name: "HEAVY METAL",
        color:  "#1A1F19",
    },{
        name: "WHITE",
        color:  "#ffffff",
    },
    {
        name: "VANILLA",
        color:  "#CCB7A5",
    },
   
    {
        name: "CONIFER",
        color:  "#C7DF57",
    },
    {
        name: "FLAME PEA",
        color:  "#E2573D",
    },
    {
        name: "HEAVY METAL",
        color:  "#1A1F19",
    }
]


export const CustomizationProvider = ( props ) => {
    const [material , setMaterial] = useState("sololoop")
    const [bandcolor, setBandcolor] =useState(bandcolors[0])
    return(
        <CustomizationContext.Provider 
        value={{ 
            material, 
            setMaterial,
            bandcolor,
            setBandcolor,
            }}
        >
            { props.children }
        </CustomizationContext.Provider>
    ); 
};

export const useCustomization = () => {
    const context = useContext(CustomizationContext);
    return context;
};
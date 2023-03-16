import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({});

export const bandcolors = [
     {
        name: "white",
        color:  "#ffffff",
    },
    {
        name: "black",
        color:  "#000000",
    },
   
    {
        name: "Lime",
        color:  "#00ff00",
    },
    {
        name: "yellow",
        color:  "#ffff00",
    },
    {
        name: "cyan",
        color:  "#00ffff",
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
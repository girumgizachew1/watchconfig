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
        name: "DANUBE",
        color:  "#61A5D2",
    },
    {
        name: "FLAMINGO",
        color:  "#F1473A",
    },
   
    {
        name: "RANGITOTO",
        color:  "#313729",
    },
    {
        name: "APRICOT",
        color:  "#EE8083",
    },
    {
        name: "MARIGOLD YELLOWL",
        color:  "#F8E274",
    },{
        name: "COD GRAY",
        color:  "#151515",
    },
    {
        name: "CARARRA",
        color:  "#E8E6E2",
    },
   
    {
        name: "BALI HAI",
        color:  "#92A4BA",
    },
    {
        name: "EDGEWATER",
        color:  "#C8E1D1",
    },
    {
        name: "SANDY BROWN",
        color:  "#F28F56",
    }
]
export const roundcolors = [
    {
       name: "WHITE",
       color:  "#ffffff",
   },
   {
       name: "VANILLA",
       color:  "#CCB7A5",
   },
     {
       name: "HEAVY METAL",
       color:  "#1A1F19",
   },
   {
       name: "DANUBE",
       color:  "#61A5D2",
   },
   {
       name: "FLAMINGO",
       color:  "#F1473A",
   },
  
   {
       name: "RANGITOTO",
       color:  "#313729",
   },
   {
       name: "APRICOT",
       color:  "#EE8083",
   },
   {
       name: "MARIGOLD YELLOWL",
       color:  "#F8E274",
   },{
       name: "COD GRAY",
       color:  "#151515",
   },
  
   {
       name: "BALI HAI",
       color:  "#92A4BA",
   },
   {
       name: "EDGEWATER",
       color:  "#C8E1D1",
   },
   {
       name: "SANDY BROWN",
       color:  "#F28F56",
   }
]


export const CustomizationProvider = ( props ) => {
    const [material , setMaterial] = useState("sololoop")
    const [bandcolor, setBandcolor] =useState(bandcolors[0])
    const [roundcolor, setRoundcolor] =useState(roundcolors[0])
    
    return(
        <CustomizationContext.Provider 
        value={{ 
            material, 
            setMaterial,
            bandcolor,
            setBandcolor,
            roundcolor,
            setRoundcolor
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
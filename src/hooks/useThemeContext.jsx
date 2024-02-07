import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

export default function useThemeContext(){
    const context = useContext(ThemeContext)

    if(!context) throw new Error("useThemeContext deve ser colocado dentro de um ThemeProvider")
    
    return context
}
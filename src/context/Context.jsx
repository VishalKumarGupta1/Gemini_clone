import { createContext } from "react";
import run from "../config/gemini";
import { useState } from "react";

export const Context = createContext();


const ContextProvider = (props) => {


    const [input, setinput] = useState("");
    const [recentpropmt, setrecentpropmt] = useState("");
    const [prevprompts, setprevprompts] = useState([]);
    const [showresult, setshowresult] = useState(false);
    const [loading, setloading] = useState(false);
    const [resultdata, setresultdata] = useState("");


    const delaypara = (index, nextword) => {
        setTimeout(() => {
            setresultdata(prev => prev + nextword);

        }, 75 * index);
    }

    const newchat = () => {
        setloading(false);
        setshowresult(false);

    }

    const onSent = async (prompt) => {
        setresultdata("");
        setloading(true);
        setshowresult(true);
        let response;
        if (prompt !== undefined) {
            response = await run(prompt);
            setrecentpropmt(prompt);
        }
        else {
            setprevprompts(prev => [...prev, input]);
            setrecentpropmt(input);
            response = await run(input)
        }

        let responsearray = response.split("**");
        let newresponse = "";
        for (let i = 0; i < responsearray.length; i++) {
            if (i == 0 || i % 2 !== 1) {
                newresponse += responsearray[i];

            }
            else {
                newresponse += "<b>" + responsearray[i] + "</b > ";
            }
        }
        let newresponse2 = newresponse.replace(/\*/g, "<br />");
        // let newresponse2 = newresponse.split("*").join("</br>")
        let newresponsearray = newresponse2.split(" ");
        for (let i = 0; i < newresponsearray.length; i++) {
            const nextword = newresponsearray[i];
            delaypara(i, nextword + " ");

        }
        setloading(false)
        setinput("");
    }



    const contextValue = {
        prevprompts,
        setprevprompts,
        onSent,
        setrecentpropmt,
        recentpropmt,
        showresult,
        loading,
        resultdata,
        input,
        setinput,
        newchat

    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;
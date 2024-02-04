import { createContext, useContext, useState } from "react";

const IndexContext = createContext();

export const IndexContextProvider = ({ children }) => {
    const [isSeen, setIsSeen] = useState(false);

    return (
        <IndexContext.Provider
            value={{
                isSeen,
                setIsSeen,
            }}
        >
            {children}
        </IndexContext.Provider>
    );
};

const IndexContextFunc = () => useContext(IndexContext);

export default IndexContextFunc;

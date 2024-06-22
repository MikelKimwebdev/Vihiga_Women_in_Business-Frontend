import { createContext, useCallback, useRef } from "react";

export const NavContext = createContext();

export const NavContextProvider = ({ children }) => {
    const WorkshopRef = useRef(null);
    const LatestNewsRef = useRef(null);
    const MentorshipRef = useRef(null)

    const ScrollToWorkshops = useCallback((e) => {
        e.preventDefault();
        // Set flag in session storage
        sessionStorage.setItem("scrollToWorkshop", "true");
        window.location.pathname = "/services";
    }, []);

    const ScrollToLatestNews =useCallback((e)=>{
        e.preventDefault();
        sessionStorage.setItem("ScrollToLatestNews","true");
        window.location.pathname="/"
    },[])

    const ScrollToMentorship = useCallback((e)=>{
        e.preventDefault();
        sessionStorage.setItem("ScrollToMentorship","true");
        window.location.pathname= "/services"
    },[])

    return (
        <NavContext.Provider
            value={{
                WorkshopRef,
                ScrollToWorkshops,
                LatestNewsRef,
                ScrollToLatestNews,
                MentorshipRef,
                ScrollToMentorship
            }}
        >
            {children}
        </NavContext.Provider>
    );
};

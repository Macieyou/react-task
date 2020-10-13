import React, {useState, createContext} from "react";

export const UsersContext = createContext("");

export const UsersProvider = props => {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Courtney Keller",
            email: "sincere@april.biz",
            phone: "1-770-736-8031",
            website: "hildegard.org",
            description: "Multi-layered client-server neural-net harness real-time e-markets",
        },
        {
            id: 2,
            name: "Hillary Gibson",
            email: "sincere@april.biz",
            phone: "1-770-736-8031",
            website: "hildegard.org",
            description: "Multi-layered client-server neural-net harness real-time e-markets",
        },
        {
            id: 3,
            name: "Brady Morris",
            email: "sincere@april.biz",
            phone: "1-770-736-8031",
            website: "hildegard.org",
            description: "Multi-layered client-server neural-net harness real-time e-markets",
        },
        {
            id: 4,
            name: "Brock Day",
            email: "sincere@april.biz",
            phone: "1-770-736-8031",
            website: "hildegard.org",
            description: "Multi-layered client-server neural-net harness real-time e-markets",
        },
        {
            id: 5,
            name: "Tony Le",
            email: "sincere@april.biz",
            phone: "1-770-736-8031",
            website: "hildegard.org",
            description: "Multi-layered client-server neural-net harness real-time e-markets",
        },
        {
            id: 6,
            name: "Ciera Ramos",
            email: "sincere@april.biz",
            phone: "1-770-736-8031",
            website: "hildegard.org",
            description: "Multi-layered client-server neural-net harness real-time e-markets",
        },
        {
            id: 7,
            name: "Trevor Daniel",
            email: "sincere@april.biz",
            phone: "1-770-736-8031",
            website: "hildegard.org",
            description: "Multi-layered client-server neural-net harness real-time e-markets",
        },
        {
            id: 8,
            name: "Skyler Mendoza",
            email: "sincere@april.biz",
            phone: "1-770-736-8031",
            website: "hildegard.org",
            description: "Multi-layered client-server neural-net harness real-time e-markets",
        }
    ]);
    return (
        <UsersContext.Provider value={[users, setUsers]}>
            {props.children}
        </UsersContext.Provider>
    )
};

import React, {useState, createContext} from "react";

export const CommentsContext = createContext("");

export const CommentsProvider = props => {
    const [comments, setComments] = useState([
        {
            userId: 1,
            postId: 1,
            commentId: 1,
            author: "Maciej Sadowski",
            title: "testowy komentarz",
            desc: "Sodales neque sodales ut etiam sit amet nisl. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Porttitor massa id neque aliquam vestibulum morbi. Quis varius quam quisque id. Sit amet aliquam id diam maecenas ultricies mi. Fermentum leo vel orci porta non pulvinar. Pellentesque pulvinar pellentesque habitant morbi tristique"
        }
    ]);
    return (
        <CommentsContext.Provider value={[comments, setComments]}>
            {props.children}
        </CommentsContext.Provider>
    )
};

export const create = (userId, token, post) => {
    return fetch(`http://localhost:3000/post/new/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json"
        },
        body: post
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err));
};

export const list = (userId, token) => {
    return fetch(`http://localhost:3000/posts/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const singlePost = postId => {
    return fetch(`http://localhost:3000/post/${postId}`, {
        method: "GET",
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err));
};

export const listByUser = (userId, token) => {
    return fetch(`http://localhost:3000/posts/by/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err));
};

export const remove = (postId, token) => {
    return fetch(`http://localhost:3000/post/${postId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err));
};

export const comment = (userId, token, postId, comment) => {
    return fetch(`http://localhost:3000/post/comment`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({userId, postId, comment})
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err));
};

export const uncomment = (userId, token, postId, comment) => {
    return fetch(`http://localhost:3000/post/uncomment`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({userId, postId, comment})
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err));
};

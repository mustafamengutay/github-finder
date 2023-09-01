const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// we export the function to call it from the component.
export const searchUsers = async (text) => {

    const params = new URLSearchParams({
        q: text,
    });

    const response = await fetch(`${GITHUB_URL}search/users?${params}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
        },
    });

    const { items } = await response.json();

    // We dispatch them from the component so inside an action, we return the data.
    return items;
};

export const getUser = async (login) => {

    const response = await fetch(`${GITHUB_URL}users/${login}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
        },
    });

    if (response.status === 404) {
        window.location = '/notfound';
    } else {
        const user = await response.json();

        return user;
    }
};

export const getUserRepos = async (login) => {

    const params = new URLSearchParams({
        sort: "created",
        per_page: 10,
    });

    const response = await fetch(`${GITHUB_URL}users/${login}/repos?${params}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
        },
    });

    const repos = await response.json();

    return repos;
};

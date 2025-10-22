const getApiUrl = () => {
    if (import.meta.env.DEV) {

        return "http://localhost:3000/api";
    }

    return "/api";
};

export const API_URL = getApiUrl();
export const API_URL_IMAGES = `${API_URL}/public/images`;
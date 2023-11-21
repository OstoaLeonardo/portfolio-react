const endPoint = 'https://api.quotable.io/random?technology&maxLength=80';

export const getQuote = async () => {
    try {
        const response = await fetch(endPoint);
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

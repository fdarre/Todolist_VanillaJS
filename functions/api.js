/**
 * Fetch JSON data from API url
 * @param {string} url
 * @param {Object} options
 * @returns {Promise<>}
 */
export async function fetchJSON (url, options = {})
{
    const headers = {accept: 'application/json', ...options};
    const response = await fetch(url, {headers});
    if (!response.ok)
    {
        throw new Error('Server Error', {cause: response});
    };
    return response.json();
}
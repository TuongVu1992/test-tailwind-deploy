const getSidebarSearch = async (bearToken, fullName) => {
    
    const response = await fetch(`http://www.fluxdux.com:443/getSideBarSearch/${bearToken}/${fullName}/`);

    if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.error(message);
        return;
    }

    const jsonData = await response.json();
    return jsonData;
}


export default {
    getSidebarSearch
};
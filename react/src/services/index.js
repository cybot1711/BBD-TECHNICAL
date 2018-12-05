export const getAccounts = async () => {
    try {
    const data = await fetch('http://localhost:8080/api/accounts');
    return data.json();
    } catch(error) {
        return error
    }
}
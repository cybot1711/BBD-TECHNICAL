export const getAccounts = async () => {
  try {
    const data = await fetch('http://localhost:8080/api/accounts');
    return data.json();
  } catch (error) {
    return error;
  }
};

export const patchAccount = async (data, id) => {
  try {
    await fetch(`http://localhost:8080/api/accounts/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return { success: true };
  } catch (error) {
    return error;
  }
};

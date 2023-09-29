export const registerNewUser = async (formData) => {
  try {
    const response = await fetch("../api/register.js", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const finalData = await response.json();
    return finalData;
  } catch (err) {
    console.log("the error :", err);
  }
};

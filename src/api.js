export const fetchResponse = async (chat) => {
  try {
    const response = await fetch("http://localhost:8080/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: chat.map((message) => message.message).join("\n"),
      }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log("the error is ", e);
  }
};

export const registerNewUser = async (formData) => {
  try {
    const response = await fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const finalData = await response.json();
    console.log(finalData, "let him cook");
    return finalData;
  } catch (err) {
    console.log("the error :", err);
    return;
  }
};

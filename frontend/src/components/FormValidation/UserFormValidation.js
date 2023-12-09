export const userFormValidation = async (loggedInUser) => {
  let errorMsg = [];
  let matchedUsers = [];


  try {
    const response = await fetch("/userData");
    const userDatas = await response.json();

    // Filter users with matching phone and password
    const matchingUsers = userDatas.filter((userData) => {
      if(userData.phone == loggedInUser.phone && userData.password == loggedInUser.password) {
        window.alert("Sucessfull");
        return userData.phone;
      }
    });

    if (matchingUsers.length > 0) {
      errorMsg.push("");
      matchedUsers = matchingUsers[0];
    } else {
      errorMsg.push("invalid phone or password");
    }

    return {errorMsg, matchedUsers};

  } catch (error) {
    console.error("Error during user form validation:", error);
    errorMsg.push("Error during validation");
    return errorMsg;
  }
};

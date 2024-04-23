// POSTMAN: API AUTH BEARER UPDATE AUTOMATION

// I'm using this code to refresh the environment variables used as storage for API authorization bearers in Postman. 

// 1. Create Postman Env Variables to store your Access and Refresh Tokens
// 2. Create an Auth Request
// 3. Put this code inside the Test tab of the Auth Request
// 4. Replace "YOUR_RESPONSE_JSON_..._TOKEN_KEY" placeholders with your real JSON keys (from API auth response)
// 5. Send Auth Request, check it went fine and you have proper Auth Response (Status: 200 OK)
// 6. Check if your Env Variables are filled with values from the Auth Response JSON
// 7. Enjoy your automation :)

pm.test("Set new EnvVar token", function () {
    let authToken = pm.response.json().YOUR_RESPONSE_JSON_AUTH_TOKEN_KEY;
    let refreshToken = pm.response.json().YOUR_RESPONSE_JSON_REFRESH_TOKEN_KEY;
    pm.environment.set("YOUR_ACCESS_TOKEN_ENV_VARIABLE_NAME", authToken);
    pm.environment.set("YOUR_REFRESH_TOKEN_ENV_VARIABLE_NAME", refreshToken);
});

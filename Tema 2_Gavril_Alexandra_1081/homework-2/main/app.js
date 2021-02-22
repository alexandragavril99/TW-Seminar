function addTokens(input, tokens) {
  if (typeof input !== "string") throw { message: "Invalid input" };

  if (input.length < 6)
    throw { message: "Input should have at least 6 characters" };

  tokens.forEach((element) => {
    if (typeof element.tokenName !== "string")
      throw { message: "Invalid array format" };
  });

  tokens.forEach((element) => {
    if (input.includes("...")) {
      input = input.replace("...", "${" + element.tokenName + "}");
    }
  });

  return input;
}

const app = {
  addTokens: addTokens,
};

module.exports = app;

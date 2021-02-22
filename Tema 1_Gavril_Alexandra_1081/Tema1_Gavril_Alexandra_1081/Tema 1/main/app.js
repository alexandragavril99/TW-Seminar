const distance = (a, b) => {
  //TODO: implementați funcția
  // TODO: implement the function
  if (
    (typeof a === "string" || a instanceof String) &&
    (typeof b === "string" || b instanceof String)
  ) {
    if (a.length == 0) return b.length;
    if (b.length == 0) return a.length;

    let m = [];

    for (let i = 0; i <= b.length; i++) {
      m[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
      m[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) == a.charAt(j - 1)) {
          m[i][j] = m[i - 1][j - 1];
        } else {
          m[i][j] = Math.min(
            m[i - 1][j - 1] + 1, //substitutie
            Math.min(
              m[i][j - 1] + 1, //adaugare
              m[i - 1][j] + 1 //stergere
            )
          ); 
        }
      }
    }

    return m[b.length][a.length];
  } else throw { message: "InvalidType" };
};

export { distance };

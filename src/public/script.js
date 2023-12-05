document.getElementById("submitButton").addEventListener("click", () => {
  const number = document.getElementById("input").value;
  fetch("http://localhost:3333/sum", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: number }),
  })
    .then((response) => response.text())
    .then((response) => {
      const result = JSON.parse(response);
      console.log(result);
      const number = parseFloat(result.data);
      if (isNaN(Number(number))) {
        document.getElementById("response").innerText = "O valor é inválido";
      } else
        document.getElementById("response").innerText = "O valor é " + number;
    });
});

window.onload = function() {
  document.querySelector("#phrase").innerHTML = generateDomain();
};

const generateDomain = () => {
  const prount = ["our", "theskinnye", "thedoortothe"];
  const what = ["dream", "nightmare", "goal"];
  const adj = ["great", "big", "incredible"];
  const domain = [".com", ".org", ".uy", ".es", ".dev"];

  const getRandomDomain = arr => arr[Math.floor(Math.random() * arr.length)];

  return `${getRandomDomain(prount)}${getRandomDomain(what)}${getRandomDomain(adj)}${getRandomDomain(domain)}`;
};

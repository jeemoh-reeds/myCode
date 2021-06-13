<<<<<<< HEAD
//To call the endpoint for AWIN and AMAZON
async function saveNetworkConfig(name, config) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    name: name,
    config: config,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    const response = await fetch("/api/admin/network/", requestOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}

//To keep the inputed parameters for AWIN and AMAZON on refresh 
async function getNetworkConfig(name) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  try {
    const response = await fetch("/api/admin/network/" + name, requestOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error", error);
    return null;
  }
}
=======
//To call the endpoint for AWIN and AMAZON
async function saveNetworkConfig(name, config) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    name: name,
    config: config,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    const response = await fetch("/api/admin/network/", requestOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}

//To keep the inputed parameters for AWIN and AMAZON on refresh 
async function getNetworkConfig(name) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  try {
    const response = await fetch("/api/admin/network/" + name, requestOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error", error);
    return null;
  }
}
>>>>>>> f97ad0ca4f4c296e341c9fd9ef15cc7bf3e15488

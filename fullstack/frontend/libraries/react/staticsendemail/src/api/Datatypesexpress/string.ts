async function number() {
  var requestOptions = {
    method: "GET",
  };
  let data = fetch(
    "http://localhost:8030/api/datatypes-string",
    requestOptions
  );
  let apidata = await (await data).json();
  return apidata;
}

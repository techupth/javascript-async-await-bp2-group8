//Exercise #1

let getJohnProfile = () => {
  //return fetch ("https//.......")
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

// Start coding here
function displayJohnProfile(result){
  console.log(result);
}
getJohnProfile().then(displayJohnProfile);

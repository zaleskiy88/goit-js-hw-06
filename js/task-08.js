const refs = {
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    return window.alert("Attention! All form fields must be filled!");
  }

  const formData = new FormData(event.currentTarget);
  const userFormData = {};

  formData.forEach((value, name) => {
    userFormData[name] = value;
  });

  console.log(userFormData);

  event.currentTarget.reset();
}

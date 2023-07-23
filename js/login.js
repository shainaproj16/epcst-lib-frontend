const loginBtn = $(".login-btn");
const loginEmail = $("#emailLogin");
const loginPassword = $("#passwordLogin");
loginBtn.on("click", function (e) {
  e.preventDefault();
  if (loginEmail.val() === "" && loginPassword.val() === "") {
    loginEmail.addClass("error");
    loginPassword.addClass("error");
    loginEmail.prev().addClass("error");
    loginPassword.prev().addClass("error");
  } else {
    loginEmail.removeClass("error");
    loginPassword.removeClass("error");
    loginEmail.prev().removeClass("error");
    loginPassword.prev().removeClass("error");
    window.location.href = "homepage.html";
  }
});

loginEmail.on("input", function () {
  if ($(this).val() !== "") {
    $(this).removeClass("error");
    $(this).prev().removeClass("error");
  } else {
    $(this).addClass("error");
    $(this).prev().addClass("error");
  }
});
loginPassword.on("input", function () {
  if ($(this).val() !== "") {
    $(this).removeClass("error");
    $(this).prev().removeClass("error");
  } else {
    $(this).addClass("error");
    $(this).prev().addClass("error");
  }
});

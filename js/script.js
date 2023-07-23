const dashboardBtn = $("button.dashboard-button");
dashboardBtn.on("click", function () {
  if (!$(this).next().hasClass("hidden")) {
    setTimeout(() => {
      $(this).next().addClass("hidden");
      $(".dashboard-svg").removeClass("active");
    }, 200);
  } else {
    setTimeout(() => {
      $(this).next().removeClass("hidden");
    }, 100);
  }
});

$(document).ready(function () {
  $(document).on("click", function (e) {
    var target = $(e.target);
    var dashboardSubMenu = $(".dashboard-menu-home");
    var dashboardBtnSvg = $(".dashboard-svg");

    if (
      target.hasClass("dashboard-button") ||
      target.hasClass("dashboard-svg") ||
      target.hasClass("dashboard-menu-home") ||
      target.hasClass("dashboard-menu-list")
    ) {
      dashboardSubMenu.removeClass("hidden");
      dashboardBtnSvg.addClass("active");
    } else {
      dashboardSubMenu.addClass("hidden");
      dashboardBtnSvg.removeClass("active");
    }
  });
});

// Side Menu
const toggleBtn = $(".toggle-menu");
const closeBtn = $(".close-menu");
const sideMenu = $(".side-menu");
const overlay = $(".overlay");
toggleBtn.on("click", function () {
  sideMenu.addClass("active");
  overlay.addClass("active");
});
closeBtn.on("click", function () {
  sideMenu.removeClass("active");
  overlay.removeClass("active");
});
overlay.on("click", function () {
  sideMenu.removeClass("active");
  overlay.removeClass("active");
});

var mobileDashboardSubMenuBtn = $(".mobile-dashboard-btn");
var mobileDashboardSubMenuBtnSvg = $(".mobile-dashboard-svg");
var mobileDashboardSubMenu = $(".mobile-dashboard-submenu");
mobileDashboardSubMenuBtn.on("click", function () {
  mobileDashboardSubMenu.toggleClass("active");
  mobileDashboardSubMenuBtnSvg.toggleClass("active");
});

// Catalog (Search)
$(".search-input").on("input", function () {
  if ($(this).val() === "") {
    $(".icon-clear").addClass("hide");
  } else {
    $(".icon-clear").removeClass("hide");
  }
});
$(".icon-clear").on("click", function () {
  $(".search-input").val("");
  $(".icon-clear").addClass("hide");
});

// Book search result action button
$(document).ready(function () {
  $("button.action").on("click", function (event) {
    event.stopPropagation(); // Stop the event from propagating up the DOM tree
    if ($(this).parent().find(".actions").hasClass("show")) {
      setTimeout(() => {
        $(this).parent().find(".actions").removeClass("show");
      }, 100);
    } else {
      $(this).parent().find(".actions").addClass("show");
    }
  });

  // Add a click event listener to the document to handle clicks outside the button
  $(document).on("click", function (event) {
    var targetElement = event.target;
    var isButtonClicked = $(targetElement).hasClass("action");

    // If the target element is not the button
    if (!isButtonClicked) {
      $(".actions").removeClass("show");
    }
  });

  // Borrow book button
  $("button.borrow").on("click", function () {
    swal({
      title: "Book Successfully Borrowed",
      text: "You have successfully borrowed the book.",
      icon: "success",
      button: "OK",
    });
    setTimeout(() => {
      // test
    }, 300);
  });
  // Reserve book button
  $("button.reserve").on("click", function () {
    swal({
      title: "Book Successfully Reserved",
      text: "You have successfully reserved the book.",
      icon: "success",
      button: "OK",
    });
    setTimeout(() => {
      // test
    }, 300);
  });
});

// Toggle Side Menu
$(".pull-sidemenu").on("click", function () {
  $(this).toggleClass("active");
  $(".sidemenu").toggleClass("active");
  $(".dashboard-main").toggleClass("full-width");
});

// Admin dropdown
$(document).on("click", function (event) {
  if (!$(event.target).closest(".admin-dropdown").length) {
    $(".admin-menu").addClass("hide");
  }
});
$(".admin-dropdown").on("click", function (event) {
  setTimeout(() => {
    if ($(".admin-menu").hasClass("hide")) {
      setTimeout(() => {
        $(".admin-menu").removeClass("hide");
      }, 100);
    } else {
      $(".admin-menu").addClass("hide");
    }
  }, 100);
});

// Announcements dropdown
$(document).on("click", function (event) {
  if (!$(event.target).closest(".dashboard-dropdown").length) {
    $(".dashboard-menu").addClass("hide");
  }
});
$(".dashboard-dropdown").on("click", function (event) {
  setTimeout(() => {
    if ($(".dashboard-menu").hasClass("hide")) {
      setTimeout(() => {
        $(".dashboard-menu").removeClass("hide");
      }, 100);
    } else {
      $(".dashboard-menu").addClass("hide");
    }
  }, 100);
});

// Side menu (report page submenu)
$(".report-btn").on("click", function () {
  $(this).parent().toggleClass("active");
});

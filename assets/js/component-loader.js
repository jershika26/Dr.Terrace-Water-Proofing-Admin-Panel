

const HeaderComponent = `
<header id="page-topbar">
    <div class="navbar-header">
        <div class="d-flex">
            <!-- LOGO -->
            <div class="navbar-brand-box">
                <a href="dashboard.html" class="logo logo-dark">
                    <span class="logo-sm">
                        <img src="assets/images/favicon.png" alt="Dr. Terrace" height="30">
                    </span>
                    <span class="logo-lg">
                        <div class="d-flex align-items-center justify-content-between w-100 h-100 px-3">
                            <span class="welcome-brand-text font-size-14 text-dark text-nowrap me-2" style="font-weight: 500;">Welcome Dr.Terrace</span>
                            <img src="assets/images/favicon.png" alt="Dr. Terrace" height="38" style="max-height: 42px; object-fit: contain;">
                        </div>
                    </span>
                </a>
            </div>

            <!-- Menu Icon -->
            <button type="button" class="btn px-3 font-size-24 header-item waves-effect" id="vertical-menu-btn">
                <i class="mdi mdi-menu"></i>
            </button>
        </div>

        <div class="d-flex align-items-center">
            <!-- Mobile Search Dropdown -->
            <div class="dropdown d-inline-block d-lg-none ms-2">
                <button type="button" class="btn header-item noti-icon waves-effect"
                    id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    <i class="mdi mdi-magnify"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                    aria-labelledby="page-header-search-dropdown">
                    <form class="p-3">
                        <div class="form-group m-0">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search ..."
                                    aria-label="Recipient's username">
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="submit"><i
                                            class="mdi mdi-magnify"></i></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <!-- User Dropdown -->
            <div class="dropdown d-inline-block">
                <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img class="rounded-circle header-profile-user" src="assets/images/users/avatar-4.jpg"
                        alt="Header Avatar">
                </button>

                <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="javascript:void(0)"><i
                            class="mdi mdi-account-circle font-size-16 align-middle me-2"></i>
                        <span>Profile</span></a>
                    <a class="dropdown-item" href="javascript:void(0)"><i
                            class="mdi mdi-cog font-size-16 align-middle me-2"></i>
                        <span>Settings</span></a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item text-primary" href="login.html"><i
                            class="mdi mdi-power font-size-16 align-middle me-2 text-primary"></i>
                        <span>Logout</span></a>
                </div>
            </div>
        </div>
    </div>
</header>
`;

const SidebarComponent = `
<div class="vertical-menu">
    <div data-simplebar class="h-100">
        <!-- Brand Box on Mobile Sidebar Open -->
        <div class="sidebar-brand-box">
            <div class="d-flex align-items-center justify-content-between w-100">
                <span class="welcome-brand-text font-size-14 text-dark text-nowrap me-2" style="font-weight: 600;">Welcome Dr.Terrace</span>
                <img src="assets/images/favicon.png" alt="Dr. Terrace" height="34" style="max-height: 38px; object-fit: contain;">
            </div>
        </div>

        <div class="user-details">
            <div class="d-flex">
                <div class="me-2">
                    <img src="assets/images/users/avatar-4.jpg" alt="" class="avatar-md rounded-circle">
                </div>
                <div class="user-info w-100">
                    <div class="dropdown">
                        <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            Donald Johnson
                            <i class="mdi mdi-chevron-down"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="javascript:void(0)" class="dropdown-item"><i
                                        class="mdi mdi-account-circle text-muted me-2"></i>
                                    Profile</a></li>
                            <li><a href="javascript:void(0)" class="dropdown-item"><i
                                        class="mdi mdi-cog text-muted me-2"></i>
                                    Settings</a></li>
                            <li><a href="javascript:void(0)" class="dropdown-item"><i
                                        class="mdi mdi-lock-open-outline text-muted me-2"></i>
                                    Lock screen</a></li>
                            <li><a href="login.html" class="dropdown-item"><i
                                        class="mdi mdi-power text-muted me-2"></i>
                                    Logout</a></li>
                        </ul>
                    </div>
                    <p class="text-white-50 m-0">Administrator</p>
                </div>
            </div>
        </div>

        <!--- Sidemenu -->
        <div id="sidebar-menu">
            <!-- Left Menu Start -->
            <ul class="metismenu list-unstyled" id="side-menu">
                <li class="menu-title">Main Menu</li>

                <li>
                    <a href="dashboard.html" class="waves-effect">
                        <i class="mdi mdi-view-dashboard"></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="mdi mdi-account-group"></i>
                        <span>Employee</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="employee-list.html">Employee List</a></li>
                        <li><a href="add-employee.html">Add Employee</a></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="mdi mdi-account-multiple-outline"></i>
                        <span>Customer</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="customer-list.html">Customer List</a></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="mdi mdi-calendar-clock"></i>
                        <span>Appointment</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="new-appointment.html">New Appointment</a></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="mdi mdi-database-cog-outline"></i>
                        <span>Master</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="master-appointment.html">Appointment</a></li>
                        <li><a href="master-service.html">Service</a></li>
                        <li><a href="master-packages.html">Packages</a></li>
                        <li><a href="house-type.html">Property Type</a></li>
                    </ul>
                </li>    

                <li>
                    <a href="terms-and-conditions.html" class="waves-effect">
                        <i class="mdi mdi-book-open-outline"></i>
                        <span>Terms & Conditions</span>
                    </a>
                </li>

                <li>
                    <a href="privacy-policy.html" class="waves-effect">
                        <i class="mdi mdi-shield-account-outline"></i>
                        <span>Privacy Policy</span>
                    </a>
                </li>

                <li>
                    <a href="contact-information.html" class="waves-effect">
                        <i class="mdi mdi-card-account-phone-outline"></i>
                        <span>Contact Information</span>
                    </a>
                </li>
               
            </ul>
        </div>
        <!-- Sidebar -->
    </div>
</div>
`;

const FooterComponent = `
<footer class="footer">
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12 text-center">
                ${new Date().getFullYear()} © Drterrace <span class="d-none d-sm-inline-block">- Crafted with <i class="mdi mdi-heart text-primary"></i></span>
            </div>
        </div>
    </div>
</footer>
`;

/**
 * Injects a component string into a container element by ID
 */
function renderComponent(id, htmlString) {
    const container = document.getElementById(id);
    if (container) {
        container.innerHTML = htmlString;
    }
}

/**
 * Initializes all sidebar, header, and layout interactions
 * after JavaScript components are rendered into the DOM.
 */
function initLoadedComponents() {
    if (typeof jQuery === "undefined") {
        return;
    }

    var $ = jQuery;

    // 1. Initialize MetisMenu on sidebar
    if ($.fn.metisMenu && $("#side-menu").length) {
        $("#side-menu").metisMenu();
    }

    // 2. Sidebar Toggle Button & Responsive Mobile Backdrop
    if (!$("#sidebar-backdrop").length) {
        $("body").append('<div id="sidebar-backdrop" class="sidebar-backdrop"></div>');
    }

    $("#vertical-menu-btn").off("click").on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        $("body").toggleClass("sidebar-enable");
        if ($(window).width() >= 992) {
            $("body").toggleClass("vertical-collpsed");
        } else {
            $("body").removeClass("vertical-collpsed");
        }
    });

    // Dismiss sidebar on backdrop click (mobile/tablet)
    $(document).off("click.sidebarBackdrop").on("click.sidebarBackdrop", "#sidebar-backdrop", function() {
        $("body").removeClass("sidebar-enable");
    });

    // Close mobile sidebar on window resize to desktop
    $(window).off("resize.sidebarResponsive").on("resize.sidebarResponsive", function() {
        if ($(window).width() >= 992) {
            $("body").removeClass("sidebar-enable");
        }
    });

    // 3. Highlight Current Active Menu Item & Expand Parent Submenus
    var currentPath = window.location.pathname.split("/").pop() || "employee-list.html";
    if (currentPath === "" || currentPath === "index.html") {
        currentPath = "dashboard.html";
    }

    $("#sidebar-menu a").each(function() {
        var href = $(this).attr("href");
        if (href === currentPath || (currentPath.indexOf("master-viewservice") !== -1 && href === "master-service.html")) {
            $(this).addClass("active");
            $(this).parent().addClass("mm-active");
            $(this).parent().parent().addClass("mm-show");
            $(this).parent().parent().prev().addClass("mm-active");
            $(this).parent().parent().parent().addClass("mm-active");
            $(this).parent().parent().parent().parent().addClass("mm-show");
            $(this).parent().parent().parent().parent().parent().addClass("mm-active");
        }
    });

    // 4. Re-init Waves on newly loaded elements
    if (window.Waves) {
        Waves.init();
    }

    // 5. Right-bar Toggle if present
    $(".right-bar-toggle").off("click").on("click", function(e) {
        $("body").toggleClass("right-bar-enabled");
    });

    $(document).off("click.rightbar").on("click.rightbar", "body", function(e) {
        if ($(e.target).closest(".right-bar-toggle, .right-bar").length === 0) {
            $("body").removeClass("right-bar-enabled");
        }
    });

    // 6. Tooltips & Popovers
    if (window.bootstrap) {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
        popoverTriggerList.map(function(popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl);
        });
    }

    // Dispatch global event for pages that want to listen for component readiness
    document.dispatchEvent(new CustomEvent("componentsLoaded"));
}

/**
 * Automatically render components on DOMContentLoaded or immediately if DOM is already ready
 */
function loadAllComponents() {
    renderComponent("header", HeaderComponent);
    renderComponent("sidebar", SidebarComponent);
    renderComponent("footer", FooterComponent);
    initLoadedComponents();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadAllComponents);
} else {
    loadAllComponents();
}

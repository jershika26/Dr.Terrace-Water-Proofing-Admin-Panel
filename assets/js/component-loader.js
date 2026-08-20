/**
 * Component Loader for Drterrace Admin Dashboard
 * Dynamically loads header, sidebar, and footer components
 * and ensures proper initialization of navigation and responsive UI interactions.
 */

function loadComponent(id, file) {
    return fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load " + file + " (Status: " + response.status + ")");
            }
            return response.text();
        })
        .then(data => {
            const container = document.getElementById(id);
            if (container) {
                container.innerHTML = data;
            }
            return data;
        })
        .catch(error => {
            console.error("Component loading error for [" + id + "]:", error);
        });
}

/**
 * Initializes all sidebar, header, and layout interactions
 * after dynamic HTML components are injected into the DOM.
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
    if (currentPath === "" || currentPath === "index.html" || currentPath === "dashboard.html") {
        currentPath = "employee-list.html";
    }

    $("#sidebar-menu a").each(function() {
        var href = $(this).attr("href");
        if (href === currentPath) {
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

// Automatically load components on DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
    // Determine relative components path
    var basePath = "components/";

    Promise.all([
        loadComponent("header", basePath + "header.html"),
        loadComponent("sidebar", basePath + "sidebar.html"),
        loadComponent("footer", basePath + "footer.html")
    ]).then(function() {
        initLoadedComponents();
    });
});

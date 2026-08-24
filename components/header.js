// Header Component JS
const HeaderTemplate = `
<header id="page-topbar">
    <div class="navbar-header">
        <div class="d-flex">
            <!-- LOGO -->
            <div class="navbar-brand-box">
                <a href="index.html" class="logo logo-dark">
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

function renderHeader(containerId = "header") {
    const el = document.getElementById(containerId);
    if (el) el.innerHTML = HeaderTemplate;
}

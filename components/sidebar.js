// Sidebar Component JS
const SidebarTemplate = `
<div class="vertical-menu">
    <div data-simplebar class="h-100">
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
                        <li><a href="all-appointments.html">All Appointments</a></li>
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
                        <li><a href="master-quote.html">Quote</a></li>
                        <li><a href="master-service.html">Service</a></li>
                        <li><a href="master-packages.html">Packages</a></li>
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
               
            </ul>
        </div>
        <!-- Sidebar -->
    </div>
</div>
`;

function renderSidebar(containerId = "sidebar") {
    const el = document.getElementById(containerId);
    if (el) el.innerHTML = SidebarTemplate;
}

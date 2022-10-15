const NavigationSidebar = () => {
    return(`
    <div class="list-group">
    <p class="list-group-item m-0">
       <i class="fab fa-twitter fa-1.5x"></i>
    </p>                    
    <!-- <p><i class="fab fa-twitter fa-1.5x"></i></p> -->
    <a href="../home.html"
       class="d-inline list-group-item list-group-item-action">
       <i class="fas fa-home"></i> <span class="d-none d-xl-inline d-xxl-inline">Home</span>
    </a>
    <a href="#"
       class="list-group-item list-group-item-action active">
       <i class="fas fa-hashtag"></i> <span class="d-none d-xl-inline d-xxl-inline"> Explore</span>
    </a>
    <a href="#"
       class="list-group-item list-group-item-action">
       <i class="fas fa-bell"></i> <span class="d-none d-xl-inline d-xxl-inline"> Notifications</span>
    </a>
    <a href="#"
       class="list-group-item list-group-item-action">
       <i class="fas fa-envelope"></i><span class="d-none d-xl-inline d-xxl-inline"> Messages</span>
    </a>
    <a href="#"
       class="list-group-item list-group-item-action">
       <i class="fas fa-bookmark"></i> <span class="d-none d-xl-inline d-xxl-inline">Bookmarks</span>
    </a>
    <a href="#"
       class="list-group-item list-group-item-action">
       <i class="fas fa-list"></i><span class="d-none d-xl-inline d-xxl-inline"> Lists</span>
    </a>
    <a href="../profile.html"
       class="list-group-item list-group-item-action">
       <i class="fas fa-user"></i> <span class="d-none d-xl-inline d-xxl-inline">Profile</span>
    </a>
    <!-- <a href="#"
       class="list-group-item list-group-item-action">
       <i class="fa fa-ellipsis-h"></i> More
    </a> -->
    
    <!-- more - with stacked icons -->
    <a href="#"
    class="list-group-item list-group-item-action">
    <span class="d-inline fa-stack fa-1x">
        <i class="fas fa-circle fa-stack-1x"></i>
        <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse fs-6"></i>
    </span>
    <span class="ps-4"> <span class="d-none d-xl-inline d-xxl-inline">More</span></span>
    </a>

</div>

<!-- tuit button -->
<button class="btn btn-primary override-bs w-100 mt-1 rounded-pill">
    Tuit
</button>
    `);
   }
export default NavigationSidebar;
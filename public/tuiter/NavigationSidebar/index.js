
const checkActiveStatus = (pageName, active) => {
   if(pageName === active){
         return `active`;
   }
   return "";
}


const NavigationSidebar = (active) => {
    return(`
         <div class="list-group">
            <p class="list-group-item m-0">
               <i class="fab fa-twitter fa-1.5x"></i>
            </p>                    
            <a href="../HomeScreen/index.html"
               class="d-inline list-group-item list-group-item-action ${checkActiveStatus('Home', active)}">
               <i class="fas fa-home"></i> <span class="d-none d-xl-inline d-xxl-inline">Home</span>
            </a>
            <a href="../ExploreScreen/index.html"
               class="list-group-item list-group-item-action ${checkActiveStatus('Explore', active)}">
               <i class="fas fa-hashtag"></i> <span class="d-none d-xl-inline d-xxl-inline"> Explore</span>
            </a>
            <a href="#"
               class="list-group-item list-group-item-action ${checkActiveStatus('Notifications', active)}">
               <i class="fas fa-bell"></i> <span class="d-none d-xl-inline d-xxl-inline"> Notifications</span>
            </a>
            <a href="#"
               class="list-group-item list-group-item-action ${checkActiveStatus('Messages', active)}">
               <i class="fas fa-envelope"></i><span class="d-none d-xl-inline d-xxl-inline"> Messages</span>
            </a>
            <a href="#"
               class="list-group-item list-group-item-action ${checkActiveStatus('Bookmarks', active)}">
               <i class="fas fa-bookmark"></i> <span class="d-none d-xl-inline d-xxl-inline">Bookmarks</span>
            </a>
            <a href="#"
               class="list-group-item list-group-item-action ${checkActiveStatus('Lists', active)}">
               <i class="fas fa-list"></i><span class="d-none d-xl-inline d-xxl-inline"> Lists</span>
            </a>
            <a href="../profile.html"
               class="list-group-item list-group-item-action ${checkActiveStatus('Profile', active)}">
               <i class="fas fa-user"></i> <span class="d-none d-xl-inline d-xxl-inline">Profile</span>
            </a>
         
            <a href="#"
            class="list-group-item list-group-item-action ${checkActiveStatus('More', active)}">
            <span class="d-inline fa-stack fa-1x">
               <i class="fas fa-circle fa-stack-1x"></i>
               <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse fs-6"></i>
            </span>
            <span class="ps-4"> <span class="d-none d-xl-inline d-xxl-inline">More</span></span>
            </a>

         </div>

         <button class="btn btn-primary override-bs w-100 mt-1 rounded-pill">
            Tuit
         </button>
    `);
   }


export default NavigationSidebar;
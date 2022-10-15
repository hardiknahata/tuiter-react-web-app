import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-10">
                    <div class="position-relative">
                        <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                        <span class="position-absolute wd-search-tuiter"> <i class="fas fa-magnifying-glass"></i></span>
                    </div>
                </div>

                <div class="col-2">
                    <a href="../edit-profile.html"> <i class="mt-1 ms-4 fas fa-gear fa-2x "></i> </a>
                </div>
            </div>

            <!-- tabs -->
            <ul class="nav nav-tabs mt-1 mb-1">
                <li class="nav-item">
                    <a class="nav-link active" href="#">
                        For You
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Trending
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        News
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" tabindex="-1">
                        Sports
                    </a>
                </li>
                <li class="nav-item d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                    <a class="nav-link" href="#" tabindex="-1">
                        Entertainment
                    </a>
                </li>
            </ul>

            <!-- big image tuit -->
            <div class="position-relative">
                <img src="../images/spacex_starship.webp" width="100%"/>
                <h1 class="ms-2 position-absolute bottom-0 text-white">SpaceX's Starship</h1>
            </div>
            ${PostSummaryList()}
           
    `);
}
export default ExploreComponent;

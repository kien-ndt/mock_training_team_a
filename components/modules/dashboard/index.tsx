import Styles from "./dashboard.module.css"
import PaginationButtons from "../../common-components/pagination"
import Element from "./common/element"
import ButtonUI from "../../common-components/button"

function DashboardComponent(){
    return(
        <div className={Styles["dashboard-container"]}>
            <div>
                <ButtonUI
                    name="search"
                    size="large"
                    padding="15px"
                    boderRadius="8px"
                />
            </div>
            <div className={Styles["content"]}>
                <Element
                    image="https://www.israeldefense.co.il/sites/default/files/styles/full_article_image/public/_Uploads/dbsArticles/2017-11-20%2018-22-58%20IAI%20Perimeter%20Protection%20Radar%20-%20YouTube%20-%20Google%20Chrome.jpg?itok=E6CI4r7N"
                    content="PERIMETER PROTECTION"
                />
                <Element
                    image="https://www.prosperity.com.au/Asset%20Protection.jfif"
                    content="ASSERT PROTECTION"
                />
                <Element
                    image="https://www.st.com/content/dam/OLM%20Email%20Marketing/2020/EMEA/Events/MOOCS%202020/STM32_security_features_350x250.png"
                    content="ASSERT CONTROL (SMART LOCKS)"
                />
                <Element
                    image="https://solutionsreview.com/network-monitoring/files/2019/12/oie_30RKSDVHz9yl.png"
                    content="ASSERT CONTROL"
                />
                <Element
                    image="https://www.tripwire.com/state-of-security/wp-content/uploads/sites/3/shutterstock_161265113.jpg"
                    content="INTEGRATED SERCURITY PLATFORMS"
                />
                <Element
                    image="https://www.tripwire.com/state-of-security/wp-content/uploads/sites/3/shutterstock_632547389.jpg"
                    content="ASSERT PROTECTION"
                />
               <Element
                    image="https://www.israeldefense.co.il/sites/default/files/styles/full_article_image/public/_Uploads/dbsArticles/2017-11-20%2018-22-58%20IAI%20Perimeter%20Protection%20Radar%20-%20YouTube%20-%20Google%20Chrome.jpg?itok=E6CI4r7N"
                    content="PERIMETER PROTECTION"
                />
                <Element
                    image="https://www.prosperity.com.au/Asset%20Protection.jfif"
                    content="ASSERT PROTECTION"
                />
                <Element
                    image="https://www.st.com/content/dam/OLM%20Email%20Marketing/2020/EMEA/Events/MOOCS%202020/STM32_security_features_350x250.png"
                    content="ASSERT CONTROL (SMART LOCKS)"
                />
                <Element
                    image="https://solutionsreview.com/network-monitoring/files/2019/12/oie_30RKSDVHz9yl.png"
                    content="ASSERT CONTROL"
                />
                <Element
                    image="https://www.tripwire.com/state-of-security/wp-content/uploads/sites/3/shutterstock_161265113.jpg"
                    content="INTEGRATED SERCURITY PLATFORMS"
                />
               
            </div>
            <div>
                <PaginationButtons count={10} countPagesShow={3} page={1} showNearButton showLastButton/>
            </div>
        </div>
    )
}

export default DashboardComponent
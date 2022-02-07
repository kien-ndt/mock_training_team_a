import Styles from "./dashboard.module.css"
import PaginationButtons from "../../common-components/pagination"
import Element from "./common/element"

function DashboardComponent(){
    return(
        <div className={Styles["dashboard-container"]}>
            <div>search area</div>
            <div className={Styles["content"]}>
                <Element 
                    
                />
            </div>
            <div>
                <PaginationButtons count={10} countPagesShow={3} page={1} showNearButton showLastButton/>
            </div>
        </div>
    )
}

export default DashboardComponent
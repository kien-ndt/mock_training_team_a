import Styles from "./dashboard.module.css"
import PaginationButtons from "../../common-components/pagination"

function DashboardComponent(){
    return(
        <div className={Styles["dashboard-container"]}>
            <div>search area</div>
            <div style={{flex: 1}}>content area</div>
            <div>
                <PaginationButtons count={10} countPagesShow={3} page={1} showNearButton showLastButton/>
            </div>
        </div>
    )
}

export default DashboardComponent
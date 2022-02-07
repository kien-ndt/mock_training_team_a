/**
 * import dashboard, bọc trong mainlayout
 */
import PersistentDrawerLeft from "../components/layout/mainLayout";
import DashboardComponent from "../components/modules/dashboard";
function Dashboard(){
    return (
        <>
        <DashboardComponent/>
        </>
    )
}

Dashboard.titleContent="Dashboard"
export default Dashboard
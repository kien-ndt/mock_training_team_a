/**
 * import registration, bọc trong mainLayout
 */
import PersistentDrawerLeft from "../components/layout/mainLayout";
import RegistrationComponent from "../components/modules/registration";
// chưa ghép vào content mà lấy thằng contextbox, phần trắng
function Registration() {
    return(
            <RegistrationComponent />
    )
}

Registration.titleContent="Registration"
export default Registration
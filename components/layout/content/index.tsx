import { Wrapper } from './Title.style'
import Styles from './content.module.css'
import Footer from '../footer'
type propsType = {
    children: any,
    title: string
}

function MainContent(props: propsType){
    return(
        <div className={Styles["main-content-container"]}>
            <div className={Styles["main-content"]}>                
                <div className={Styles["label"]}>{props.title}</div>
                <div className={Styles["content"]}>{props.children}</div>
            </div>                   
            <div className={Styles["main-footer"]}>                
                <Footer content="@Coppyright 2020 ST Engineering."/>
            </div>                   
            
        </div>
    )
}

export default MainContent
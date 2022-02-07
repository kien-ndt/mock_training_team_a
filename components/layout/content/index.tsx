import { Wrapper } from './Title.style'
import Styles from './content.module.css'
type propsType = {
    children: any,
    title: string
}

function MainContent(props: propsType){
    return(
        <div className={Styles["main-content"]}>             
            <div className={Styles["label"]}>{props.title}</div>
            {props.children}
        </div>
    )
}

export default MainContent
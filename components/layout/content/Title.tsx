/**
 * là phần content xám trong hình
 * background xám, có sẵn label chính của page
 * nhận props là children (nội dung phần content)
 */
import { Wrapper } from './Title.style'

type Props = {
    message: string
}

const Title : React.FC<Props> = ({message}) =>(
     <Wrapper>
       <h1>{message}</h1>
    </Wrapper>
)

export default Title;
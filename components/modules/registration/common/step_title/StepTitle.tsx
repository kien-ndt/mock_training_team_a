import { Wrapper } from './StepTitle.style'
import Title from './Title';
import Step from './Step';

export type Props = {
    title: string
    step : number
}

const StepTitle : React.FC<Props> = ({step, title}) =>(
     <Wrapper>
        <Step step = {step}/>
        <Title title ={title}/>
    </Wrapper>
)

export default StepTitle;
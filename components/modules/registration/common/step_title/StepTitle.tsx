import { Wrapper } from './stepTitle.style'
import Title from './title';
import Step from './step';

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

type Props ={
    step : number
}

const Step : React.FC<Props>= ({step}) =>(
    <p>Step {step} / 5</p>
)

export default Step;
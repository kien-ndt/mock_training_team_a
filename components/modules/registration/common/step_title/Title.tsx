

type Props ={
    title : string
}

const Title : React.FC<Props>= ({title}) =>(
    <h1>{title}</h1>
)

export default Title;
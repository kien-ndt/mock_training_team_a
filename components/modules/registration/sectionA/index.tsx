import RegistrationForm from "../common/form"
import { idFormSectionA } from '../common/constants'

function SectionA() {

    const submitForm = (data: any) => {
        console.log(data)
    }

    return(
        <>
            <RegistrationForm 
                fields={[
                    {
                        label: "ddd ",
                        property: "input ne",
                        type: "input",
                        placeholder: "dien vao"
                    },
                    {
                        label: "name",
                        property: "name1 23",
                        type: "selectbox",
                        optionsSelect: [
                            {
                                label: "dong 1 ne"
                            },
                            {
                                label: "dong 2 ne"
                            }
                        ],
                        placeholder: "hahah hahaa"
                    }
                ]}
                submitForm={submitForm}
                formId={idFormSectionA}
            />
            <button type="submit" form={idFormSectionA}>123123</button>
        </>
    )
}
export default SectionA
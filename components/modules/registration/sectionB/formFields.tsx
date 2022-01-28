import {formInput} from '../common/commonType'

export const formFields = (): Array<formInput> => {
    return(
    [
        {
            label: "Name of Company's CEO or equivalent",
            labelStyle: {
                fontWeight: "bold"
            },
            property: "nameCompanyCEO",
            type: "input",
            placeholder: "Name of Company's CEO or equivalent"
        },
        {
            label: "Name of Company's CEO or equivalent",
            property: "nameCompanyCEO1",
            type: "input",
            placeholder: "Name of Company's CEO or equivalent"
        },
    ]
    )
}

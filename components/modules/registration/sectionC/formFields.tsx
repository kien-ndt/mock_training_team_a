import {formInput} from '../common/commonType'

export const formFields = (): Array<formInput> => {
    return(
    [
        {
            label: "Name of Company's CEO or 12313123",
            labelStyle: {
                fontWeight: "bold"
            },
            property: "nameCompanyCEO",
            type: "input",
            placeholder: "Name of Company's CEO or equivalent"
        },
        {
            label: "Name of Company's CEO or equivalent",
            property: "nameCompanyCEO",
            type: "input",
            placeholder: "Name of Company's CEO or equivalent"
        },
    ]
    )
}

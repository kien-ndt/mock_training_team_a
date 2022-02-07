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
            label: "Name of Top 3 Shareholders",
            property: "name3Shareholders1",
            type: "input",
            placeholder: "Name of Top 3 Shareholders"
        },
        {
            label: "",
            property: "name3Shareholders2",
            type: "input",
            placeholder: "Name of Top 3 Shareholders"
        },
        {
            label: "",
            property: "name3Shareholders3",
            type: "input",
            placeholder: "Name of Top 3 Shareholders"
        },
    ]
    )
}

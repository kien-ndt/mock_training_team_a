import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Router from 'next/router'

/**
* type input convert to component
* icon -> first icon of row
* label -> label of row
* label2 -> other label, under label
* endIcon -> icon end of row
* childComponents -> items in dropdown
*/
export type inputSidebarItem = {
   icon?: JSX.Element
   label: string
   label2?: string
   endIcon?:JSX.Element
   childComponents?: Array<inputSidebarItem>
   id: string
   onClick?: Function
}

export const listSidebarId = {
    dashboard: "dashboard",
        perimeterProtection: "dashboard/perimeterProtection",
        assetProtection: "dashboard/assetProtection",
        assetControl: "dashboard/assetControl",
    registration: "registration",
        sectionA: "registration/sectionA",
        sectionB: "registration/sectionB",
        sectionC: "registration/sectionC",
        attachments: "registration/attachments",
        submission: "registration/submisstion"
}

export const listSidebarItem: Array<inputSidebarItem> = [
    {
        icon: <HomeOutlinedIcon />,
        label: "Dashboard",
        id: listSidebarId.dashboard,
        onClick: () => {Router.push("/dashboard")},
        childComponents: [
            {
                icon: <GridViewIcon/>,
                label: "Perimeter Protection",
                endIcon: <ChevronRightIcon />,
                id: listSidebarId.perimeterProtection
            },
            {
                icon: <GridViewIcon />,
                label: "Asset Protection",
                endIcon: <ChevronRightIcon />,
                id: listSidebarId.assetProtection
            },
            {
                icon: <GridViewIcon />,
                label: "Asset Control",
                label2: "(Smart Locks)",
                endIcon: <ChevronRightIcon />,
                id: listSidebarId.assetControl
            },
            {
                icon: <GridViewIcon />,
                label: "Perimeter Protection",
                endIcon: <ChevronRightIcon />,
                id: listSidebarId.perimeterProtection
            },
            {
                icon: <GridViewIcon />,
                label: "Perimeter Protection",
                endIcon: <ChevronRightIcon />,
                id: listSidebarId.perimeterProtection
            },
        ]
    },
    {
        icon: <AppRegistrationIcon />,
        label: "Registration",
        id: listSidebarId.registration,        
        onClick: () => {Router.push("/registration")},
        childComponents: [
            {
                label: "Section A",
                id: listSidebarId.sectionA
            },
            {
                label: "Section B",
                id: listSidebarId.sectionB
            },
            {
                label: "Section C",
                id: listSidebarId.sectionC
            },
            {
                label: "Attachments",
                id: listSidebarId.attachments
            },
            {
                label: "Submission",
                id: listSidebarId.submission
            },
        ]
    }
]
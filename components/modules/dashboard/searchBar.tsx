import Styles from "./dashboard.module.css"
import PaginationButtons from "../../common-components/pagination"
import Element from "./common/element"
import SelectBoxCustom from "../../common-components/selectbox"
import ButtonUI from "../../common-components/button"
import Button from '@mui/material/Button'
import GridView from "@mui/icons-material/GridView"
import { useState } from "react"
import { IconButton } from "material-ui"
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'

function SearchBar() {
    const [state, setState] = useState<any>({
        label: "10"
    })
    return (
        <div className={Styles["searchBar"]}>

            <div className={Styles["searchBarStart"]}>
                <SelectBoxCustom placeholder="Product" />
                <SelectBoxCustom placeholder="Language" />
                <SelectBoxCustom placeholder="Asset Type" />
                <ButtonUI name="search"
                    size="small"
                    padding="10px"
                    onClick={() => { return }}
                    boderRadius="5px" />

            </div>

            <div className={Styles["searchBarStart"]} >
                <span> View Item </span>
                <SelectBoxCustom
                    style={{ width: "60px", padding: "5px 0 5px 3px", height: "35px" }}
                    options={[{ label: "5" }, { label: "10" }]} value={state.label} onChange={(data) => { setState({ label: data.target.value }) }} />

                <GridView fontSize="large" />
                <FormatListBulletedIcon fontSize="large" />
            </div>

        </div>
    )
}

export default SearchBar;
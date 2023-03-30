import {ListGroup, ListGroupItem} from "react-bootstrap";
import {TypeObject} from "../models/TypeObject";


export type AboutTypeProps = AboutPropsTypeState & AboutPropsTypeDispatch & AboutPropsOwn


export type AboutPropsTypeState = {
    type:  Array<TypeObject>,
    selectedType: TypeObject
}

export type AboutPropsTypeDispatch = {
    setSelectedType: (selectedType: TypeObject) => void
    setTypes: (type: Array<TypeObject>) => void
}

export type AboutPropsOwn = {

}

const TypeBar =((props: AboutTypeProps) => {
    const types = props
    return(
        <ListGroup>
            {types.type.map(t =>
                <ListGroupItem
                style = {{cursor: 'pointer'}}
                active = {t.id === types.selectedType.id}
                onClick={() => types.setSelectedType(t)}
                key={t.id}
                >
                    {t.name}
                </ListGroupItem>

            )}
        </ListGroup>
    )
})

export default TypeBar;
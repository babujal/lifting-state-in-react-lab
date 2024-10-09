const BurgerStack = (props) => {


    return(
        <>
            <ul>
                {props.stack.map((ingredient, index) => {
                    const colorBackGroung = ingredient.color
                    const itemName = ingredient.name
                    return (
                        <>
                            <li key={index} className="ingrerdients" style={{ backgroundColor: colorBackGroung }}>
                                <p>{ingredient.name}</p>
                                <button onClick={() => {
                                const updatedStack = props.stack.filter(el => el.name !== itemName)
                                console.log('Stack minus the item:',updatedStack)
                                props.setStack([...updatedStack])
                            }}>-</button>
                            </li>
                        </>
                    )
                })}
            </ul>
    </>
    )
}

export default BurgerStack;
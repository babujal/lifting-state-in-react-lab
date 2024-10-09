const IngredientList = (props) => {
    console.log(props);
    return (
        <>
            <ul>
                {props.availableIngredients.map((ingredient, index) => {
                    const colorBackGroung = ingredient.color
                    return (
                        <>
                            <li key={index} className="ingrerdients" style={{ backgroundColor: colorBackGroung }}>
                                <p>{ingredient.name}</p>
                                <button onClick={() => {
                                const copyOfIngredient = ingredient;
                                console.log(copyOfIngredient)
                                props.setStack([...props.stack, copyOfIngredient])
                                console.log(...props.stack)
                            }}>
                                +
                            </button>
                            </li>
                        </>
                    )
                })}
            </ul>
        </>
    )

}

export default IngredientList;
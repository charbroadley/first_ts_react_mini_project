import React, {useRef} from "react";

interface ShoppingListFormProps {
    addItem: (product: string, quantity: number) => void;
}

function ShoppingListForm ({addItem}: ShoppingListFormProps): JSX.Element {

    const productInputRef = useRef<HTMLInputElement>(null)
    const quantityInputRef = useRef<HTMLInputElement>(null)
    // This needs to start as null because the very first time this runs in the DOM the returned component doesn't exist yet

    function handleSubmit (evt: React.FormEvent) {
        evt.preventDefault()
        const newProduct = productInputRef.current!.value // inputRef may or may not be null so need a ? or a !
        const quantity = parseInt(quantityInputRef.current!.value)
        addItem(newProduct, quantity)
        productInputRef.current!.value = ""
        quantityInputRef.current!.value = "1"
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Product Name" ref={productInputRef}/>
            <input type="number"min={0} ref={quantityInputRef}/>
            <button type="submit">Add Item</button>
        </form>
    )
}

export default ShoppingListForm
function Button({text, event}) {
    return (
        <button className="btn_pedido_modal" onClick={() => event()}>{text}</button>
    )
}

export default Button;
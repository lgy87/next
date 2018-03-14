function concatToClassNameIf (klass, pred, props) {
    return {
      ...props,
      className: cx(
        props.className,
        { [klass]: pred(props) },
      ),
    }
}

export default r.curry(concatToClassNameIf)
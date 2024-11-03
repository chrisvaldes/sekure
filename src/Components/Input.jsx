const Input = ({
    type,
    placeholder = '',
    name,
    value,
    onChange,
    id,
    className = 'form-control',
    style,
    register,
    error,
  }) => {
    return (
      <>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          id={id}
          className={className}
          style={style}
          {...(register ? register(name) : {})}
          required
        />
        {error && <p style={{ color: 'red', textAlign : 'left' }}>{error.message}</p>} {/* Affichez l'erreur ici */}
      </>
    );
  };
  
  export default Input;